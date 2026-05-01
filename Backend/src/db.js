// In-memory store — mirrors what SQLite tables would look like.
// In production: replace with better-sqlite3 or PostgreSQL.
import { v4 as uuidv4 } from 'uuid';
import { managers, technicians, quotes as seedQuotes } from './data.js';

const now = () => new Date().toISOString();

// ── Seed Data ────────────────────────────────────────────────────────────────

export const db = {
  managers,
  technicians,

  quotes: seedQuotes.map(q => ({ ...q, createdAt: now() })),

  jobs: [],        // { id, quoteId, technicianId, managerId, startTime, endTime, status, createdAt, updatedAt }
  notifications: [], // { id, type, recipientType, recipientId, message, read, createdAt }
};

// ── Helpers ───────────────────────────────────────────────────────────────────

export function createJob({ quoteId, technicianId, managerId, startTime }) {
  const start = new Date(startTime);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // +2 hours

  // Conflict check — enforced here (backend)
  const conflict = db.jobs.find(j =>
    j.technicianId === technicianId &&
    j.status !== 'cancelled' &&
    new Date(j.startTime) < end &&
    new Date(j.endTime) > start
  );
  if (conflict) {
    const err = new Error(
      `Technician already has a job from ${fmtTime(conflict.startTime)} to ${fmtTime(conflict.endTime)}.`
    );
    err.code = 'CONFLICT';
    throw err;
  }

  const job = {
    id: uuidv4(),
    quoteId,
    technicianId,
    managerId,
    startTime: start.toISOString(),
    endTime: end.toISOString(),
    status: 'scheduled',
    createdAt: now(),
    updatedAt: now(),
  };

  db.jobs.push(job);

  // Mark quote as scheduled
  const quote = db.quotes.find(q => q.id === quoteId);
  if (quote) quote.status = 'scheduled';

  // Notify technician
  pushNotification({
    type: 'JOB_ASSIGNED',
    recipientType: 'technician',
    recipientId: technicianId,
    message: `You have been assigned a new job: "${quote?.title}" on ${fmtDate(start)} at ${fmtTime(start)}.`,
  });

  return job;
}

export function completeJob(jobId) {
  const job = db.jobs.find(j => j.id === jobId);
  if (!job) throw Object.assign(new Error('Job not found'), { code: 'NOT_FOUND' });
  if (job.status === 'completed') throw Object.assign(new Error('Job already completed'), { code: 'BAD_STATE' });

  job.status = 'completed';
  job.updatedAt = now();

  const quote = db.quotes.find(q => q.id === job.quoteId);

  // Notify manager
  pushNotification({
    type: 'JOB_COMPLETED',
    recipientType: 'manager',
    recipientId: job.managerId,
    message: `Job "${quote?.title}" has been marked complete by technician.`,
  });

  return job;
}

export function pushNotification({ type, recipientType, recipientId, message }) {
  const n = { id: uuidv4(), type, recipientType, recipientId, message, read: false, createdAt: now() };
  db.notifications.push(n);
  return n;
}

export function markNotificationRead(id) {
  const n = db.notifications.find(n => n.id === id);
  if (n) n.read = true;
  return n;
}

function fmtTime(iso) {
  return new Date(iso).toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: true });
}
function fmtDate(d) {
  return d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' });
}