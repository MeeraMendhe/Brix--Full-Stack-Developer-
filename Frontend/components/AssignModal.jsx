import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/client.js';
import { format, addDays } from 'date-fns';

const HOURS = Array.from({ length: 14 }, (_, i) => {
  const h = i + 7; // 7am – 8pm
  return { value: h, label: `${h < 12 ? h : h === 12 ? 12 : h - 12}:00 ${h < 12 ? 'AM' : 'PM'}` };
});

const DAYS = Array.from({ length: 7 }, (_, i) => {
  const d = addDays(new Date(), i);
  return { value: format(d, 'yyyy-MM-dd'), label: format(d, 'EEE, d MMM') };
});

export default function AssignModal({ quote, managerId, onClose }) {
  const qc = useQueryClient();
  const { data: technicians = [] } = useQuery({ queryKey: ['technicians'], queryFn: api.getTechnicians });

  const [techId, setTechId] = useState('');
  const [day, setDay] = useState(DAYS[0].value);
  const [hour, setHour] = useState(9);
  const [error, setError] = useState('');

  const mutation = useMutation({
    mutationFn: api.createJob,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['jobs'] });
      qc.invalidateQueries({ queryKey: ['quotes'] });
      qc.invalidateQueries({ queryKey: ['notifications'] });
      onClose();
    },
    onError: (err) => setError(err.message),
  });

  function handleSubmit() {
    if (!techId) return setError('Please select a technician.');
    setError('');
    const startTime = new Date(`${day}T${String(hour).padStart(2, '0')}:00:00`).toISOString();
    mutation.mutate({ quoteId: quote.id, technicianId: techId, managerId, startTime });
  }

  const endHour = hour + 2;
  const endLabel = endHour < 12 ? `${endHour}:00 AM` : endHour === 12 ? '12:00 PM' : `${endHour - 12}:00 PM`;
  const selectedHourLabel = HOURS.find(h => h.value === hour)?.label;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <h2>Assign Quote</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div style={{ padding: '12px 16px', background: 'var(--surface2)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 4 }}>{quote.title}</div>
            <div style={{ fontSize: 12, color: 'var(--text2)' }}>{quote.address}</div>
          </div>

          <div className="form-group">
            <label className="form-label">Technician</label>
            <select className="form-control" value={techId} onChange={e => { setTechId(e.target.value); setError(''); }}>
              <option value="">— Select technician —</option>
              {technicians.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Date</label>
            <select className="form-control" value={day} onChange={e => setDay(e.target.value)}>
              {DAYS.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Start Time</label>
            <select className="form-control" value={hour} onChange={e => setHour(+e.target.value)}>
              {HOURS.map(h => <option key={h.value} value={h.value}>{h.label}</option>)}
            </select>
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:8, padding:'10px 14px', background:'var(--blue-bg)', borderRadius:'var(--radius)', border:'1px solid rgba(79,124,255,0.15)', fontSize:13 }}>
            <span>🕐</span>
            <span>2-hour window: <strong>{selectedHourLabel}</strong> → <strong>{endLabel}</strong></span>
          </div>

          {error && <div className="alert alert-error">{error}</div>}
        </div>
        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSubmit} disabled={mutation.isPending}>
            {mutation.isPending
              ? <><span className="spinner" style={{ width:14, height:14, borderWidth:2 }} /> Assigning…</>
              : 'Assign Job'}
          </button>
        </div>
      </div>
    </div>
  );
}