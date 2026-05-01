import { Router } from 'express';
import { db, createJob, completeJob, markNotificationRead } from './db.js';

const r = Router();

// ── Managers ──────────────────────────────────────────────────────────────────
r.get('/managers', (_, res) => res.json(db.managers));

// ── Technicians ───────────────────────────────────────────────────────────────
r.get('/technicians', (_, res) => res.json(db.technicians));

r.get('/technicians/:id/jobs', (req, res) => {
  const jobs = db.jobs
    .filter(j => j.technicianId === req.params.id)
    .map(enrichJob)
    .sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  res.json(jobs);
});

// ── Quotes ────────────────────────────────────────────────────────────────────
r.get('/quotes', (req, res) => {
  const { status } = req.query;
  let quotes = db.quotes;
  if (status) quotes = quotes.filter(q => q.status === status);
  res.json(quotes);
});

// ── Jobs ──────────────────────────────────────────────────────────────────────
r.get('/jobs', (req, res) => {
  const { technicianId, managerId, status } = req.query;
  let jobs = db.jobs.map(enrichJob);
  if (technicianId) jobs = jobs.filter(j => j.technicianId === technicianId);
  if (managerId)    jobs = jobs.filter(j => j.managerId === managerId);
  if (status)       jobs = jobs.filter(j => j.status === status);
  jobs.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  res.json(jobs);
});

r.post('/jobs', (req, res) => {
  const { quoteId, technicianId, managerId, startTime } = req.body;
  if (!quoteId || !technicianId || !managerId || !startTime) {
    return res.status(400).json({ error: 'quoteId, technicianId, managerId, startTime are required.' });
  }
  const quote = db.quotes.find(q => q.id === quoteId);
  if (!quote) return res.status(404).json({ error: 'Quote not found.' });
  if (quote.status === 'scheduled') return res.status(409).json({ error: 'Quote is already scheduled.' });

  try {
    const job = createJob({ quoteId, technicianId, managerId, startTime });
    res.status(201).json(enrichJob(job));
  } catch (err) {
    if (err.code === 'CONFLICT') return res.status(409).json({ error: err.message });
    throw err;
  }
});

r.patch('/jobs/:id/complete', (req, res) => {
  try {
    const job = completeJob(req.params.id);
    res.json(enrichJob(job));
  } catch (err) {
    if (err.code === 'NOT_FOUND') return res.status(404).json({ error: err.message });
    if (err.code === 'BAD_STATE')  return res.status(409).json({ error: err.message });
    throw err;
  }
});

// ── Notifications ─────────────────────────────────────────────────────────────
r.get('/notifications', (req, res) => {
  const { recipientType, recipientId } = req.query;
  let notes = db.notifications;
  if (recipientType) notes = notes.filter(n => n.recipientType === recipientType);
  if (recipientId)   notes = notes.filter(n => n.recipientId === recipientId);
  notes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.json(notes);
});

r.patch('/notifications/:id/read', (req, res) => {
  const n = markNotificationRead(req.params.id);
  if (!n) return res.status(404).json({ error: 'Notification not found.' });
  res.json(n);
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function enrichJob(job) {
  return {
    ...job,
    quote:      db.quotes.find(q => q.id === job.quoteId)      || null,
    technician: db.technicians.find(t => t.id === job.technicianId) || null,
    manager:    db.managers.find(m => m.id === job.managerId)   || null,
  };
}

export default r;
