import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client.js';
import { format } from 'date-fns';

export default function Dashboard({ managerId }) {
  const { data: jobs = [] } = useQuery({ queryKey: ['jobs'], queryFn: () => api.getJobs(), refetchInterval: 5000 });
  const { data: quotes = [] } = useQuery({ queryKey: ['quotes'], queryFn: () => api.getQuotes() });
  const { data: technicians = [] } = useQuery({ queryKey: ['technicians'], queryFn: api.getTechnicians });

  const scheduled = jobs.filter(j => j.status === 'scheduled');
  const completed = jobs.filter(j => j.status === 'completed');
  const unscheduled = quotes.filter(q => q.status === 'unscheduled');

  // Recent 5 jobs
  const recent = [...jobs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of scheduling activity</p>
        </div>
      </div>
      <div className="page-body">
        <div className="grid-3" style={{ marginBottom: 24 }}>
          <div className="stat-card">
            <div className="stat-label">Unscheduled Quotes</div>
            <div className="stat-value" style={{ color: 'var(--amber)' }}>{unscheduled.length}</div>
            <div className="stat-sub">Awaiting assignment</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Active Jobs</div>
            <div className="stat-value" style={{ color: 'var(--accent)' }}>{scheduled.length}</div>
            <div className="stat-sub">Currently scheduled</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Completed</div>
            <div className="stat-value" style={{ color: 'var(--green)' }}>{completed.length}</div>
            <div className="stat-sub">All time</div>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="card-header">Recent Job Activity</div>
            {recent.length === 0 ? (
              <div className="empty-state"><div className="icon">⊞</div><p>No jobs yet</p></div>
            ) : (
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Quote</th><th>Technician</th><th>Status</th><th>Start</th></tr></thead>
                  <tbody>
                    {recent.map(j => (
                      <tr key={j.id}>
                        <td style={{ maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {j.quote?.title || '—'}
                        </td>
                        <td>{j.technician?.name?.split(' ')[0] || '—'}</td>
                        <td><span className={`status ${j.status}`}>{j.status}</span></td>
                        <td style={{ fontFamily: 'DM Mono', fontSize: 12 }}>
                          {format(new Date(j.startTime), 'dd MMM HH:mm')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="card">
            <div className="card-header">Technician Workload</div>
            <div style={{ padding: '8px 0' }}>
              {technicians.map(t => {
                const techJobs = jobs.filter(j => j.technicianId === t.id);
                const active = techJobs.filter(j => j.status === 'scheduled').length;
                const done = techJobs.filter(j => j.status === 'completed').length;
                return (
                  <div key={t.id} style={{ padding: '12px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width:32,height:32,background:'var(--accent)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700,fontSize:12,flexShrink:0 }}>
                      {t.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:600, fontSize:13.5 }}>{t.name}</div>
                      <div style={{ fontSize:12, color:'var(--text3)', marginTop:2 }}>
                        <span style={{ color:'var(--accent)' }}>{active} scheduled</span>
                        {done > 0 && <span style={{ marginLeft:8 }}>· {done} completed</span>}
                      </div>
                    </div>
                    <div style={{ textAlign:'right' }}>
                      <div style={{ fontFamily:'DM Mono', fontSize:18, fontWeight:700 }}>{techJobs.length}</div>
                      <div style={{ fontSize:11, color:'var(--text3)' }}>total jobs</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}