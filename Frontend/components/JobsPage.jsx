import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/client.js';
import { format } from 'date-fns';

export default function JobsPage({ managerId }) {
  const [filter, setFilter] = useState('');
  const qc = useQueryClient();

  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ['jobs', filter],
    queryFn: () => api.getJobs(filter ? { status: filter } : {}),
    refetchInterval: 5000,
  });

  return (
    <>
      <div className="page-header">
        <div><h1>All Jobs</h1><p>Manage and monitor all scheduled jobs</p></div>
      </div>
      <div className="page-body">
        <div className="tabs">
          {[['', 'All'], ['scheduled', 'Scheduled'], ['completed', 'Completed']].map(([f, label]) => (
            <button key={f} className={`tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {label}
            </button>
          ))}
        </div>

        <div className="card">
          <div className="card-header">{jobs.length} job{jobs.length !== 1 ? 's' : ''}</div>
          {isLoading ? (
            <div className="loading-page"><div className="spinner" /><span>Loading…</span></div>
          ) : jobs.length === 0 ? (
            <div className="empty-state"><div className="icon">⊞</div><p>No jobs found</p></div>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Quote</th>
                    <th>Technician</th>
                    <th>Manager</th>
                    <th>Window</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map(j => (
                    <tr key={j.id}>
                      <td>
                        <div style={{ fontWeight: 500 }}>{j.quote?.title || '—'}</div>
                        <div style={{ fontSize: 11.5, color: 'var(--text3)', marginTop: 2 }}>{j.quote?.address}</div>
                      </td>
                      <td>
                        <div className="chip">
                          <div className="chip-avatar">
                            {j.technician?.name.split(' ').map(n => n[0]).join('') || '?'}
                          </div>
                          {j.technician?.name || '—'}
                        </div>
                      </td>
                      <td style={{ color: 'var(--text2)', fontSize: 13 }}>{j.manager?.name || '—'}</td>
                      <td style={{ fontFamily: 'DM Mono', fontSize: 11.5 }}>
                        <div>{format(new Date(j.startTime), 'dd MMM')}</div>
                        <div style={{ color: 'var(--text3)' }}>
                          {format(new Date(j.startTime), 'HH:mm')}–{format(new Date(j.endTime), 'HH:mm')}
                        </div>
                      </td>
                      <td><span className={`status ${j.status}`}>{j.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}