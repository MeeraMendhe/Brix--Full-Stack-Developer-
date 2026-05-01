import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/client.js';
import { format } from 'date-fns';

export default function TechnicianPage({ technicianId }) {
  const qc = useQueryClient();

  const { data: technicians = [] } = useQuery({ queryKey: ['technicians'], queryFn: api.getTechnicians });
  const tech = technicians.find(t => t.id === technicianId);

  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ['techJobs', technicianId],
    queryFn: () => api.getTechnicianJobs(technicianId),
    refetchInterval: 5000,
  });

  const { data: notifs = [] } = useQuery({
    queryKey: ['notifications', 'tech', technicianId],
    queryFn: () => api.getNotifications({ recipientType: 'technician', recipientId: technicianId }),
    refetchInterval: 4000,
  });

  const completeMutation = useMutation({
    mutationFn: api.completeJob,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['techJobs', technicianId] });
      qc.invalidateQueries({ queryKey: ['jobs'] });
      qc.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  const markRead = useMutation({
    mutationFn: api.markNotificationRead,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['notifications'] }),
  });

  const scheduled = jobs.filter(j => j.status === 'scheduled');
  const completed = jobs.filter(j => j.status === 'completed');
  const unread = notifs.filter(n => !n.read);

  return (
    <>
      <div className="page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
            <div style={{ width:40, height:40, background:'var(--accent)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:15, flexShrink:0 }}>
              {tech?.name.split(' ').map(n => n[0]).join('') || '?'}
            </div>
            <h1>{tech?.name || 'Technician'}</h1>
          </div>
          <p>{tech?.email} · {tech?.phone}</p>
        </div>
        <div style={{ display: 'flex', gap: 12, textAlign: 'center' }}>
          <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '12px 20px' }}>
            <div style={{ fontFamily: 'DM Mono', fontSize: 24, fontWeight: 700, color: 'var(--accent)' }}>{scheduled.length}</div>
            <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>Scheduled</div>
          </div>
          <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '12px 20px' }}>
            <div style={{ fontFamily: 'DM Mono', fontSize: 24, fontWeight: 700, color: 'var(--green)' }}>{completed.length}</div>
            <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>Completed</div>
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="grid-2">

          {/* Job Schedule */}
          <div className="card">
            <div className="card-header">My Schedule</div>
            {isLoading ? (
              <div className="loading-page"><div className="spinner" /><span>Loading…</span></div>
            ) : jobs.length === 0 ? (
              <div className="empty-state"><div className="icon">📋</div><p>No jobs assigned yet</p></div>
            ) : (
              <div>
                {jobs.map(j => (
                  <div key={j.id} style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', gap: 14 }}>
                    <div style={{ textAlign: 'center', minWidth: 48, flexShrink: 0 }}>
                      <div style={{ fontFamily: 'DM Mono', fontSize: 20, fontWeight: 700, color: j.status === 'completed' ? 'var(--green)' : 'var(--accent)' }}>
                        {format(new Date(j.startTime), 'dd')}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase' }}>
                        {format(new Date(j.startTime), 'MMM')}
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13.5 }}>{j.quote?.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 2 }}>{j.quote?.address}</div>
                      <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 4, fontFamily: 'DM Mono' }}>
                        {format(new Date(j.startTime), 'HH:mm')} – {format(new Date(j.endTime), 'HH:mm')}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, alignItems: 'flex-end' }}>
                      <span className={`status ${j.status}`}>{j.status}</span>
                      {j.status === 'scheduled' && (
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => completeMutation.mutate(j.id)}
                          disabled={completeMutation.isPending && completeMutation.variables === j.id}
                        >
                          ✓ Complete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="card">
            <div className="card-header">
              Notifications
              {unread.length > 0 && <span className="badge blue">{unread.length}</span>}
            </div>
            {notifs.length === 0 ? (
              <div className="empty-state"><div className="icon">🔔</div><p>No notifications</p></div>
            ) : (
              <div>
                {notifs.map(n => (
                  <div
                    key={n.id}
                    className={`notif-item ${!n.read ? 'unread' : ''}`}
                    onClick={() => !n.read && markRead.mutate(n.id)}
                  >
                    <div className={`notif-dot ${n.read ? 'read' : ''}`} />
                    <div>
                      <div className="notif-msg">{n.message}</div>
                      <div className="notif-time">
                        {new Date(n.createdAt).toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' })}
                        {!n.read && <span style={{ marginLeft: 8, color: 'var(--accent)', fontSize: 10, fontWeight: 600 }}>TAP TO MARK READ</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}