import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/client.js';
import { formatDistanceToNow } from 'date-fns';

const TYPE_ICON = { JOB_ASSIGNED: '📌', JOB_COMPLETED: '✅' };

export default function NotificationsPage() {
  const qc = useQueryClient();

  const { data: notifs = [], isLoading } = useQuery({
    queryKey: ['notifications', 'all'],
    queryFn: () => api.getNotifications(),
    refetchInterval: 4000,
  });

  const markRead = useMutation({
    mutationFn: api.markNotificationRead,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['notifications'] }),
  });

  const unread = notifs.filter(n => !n.read);

  function markAllRead() {
    unread.forEach(n => markRead.mutate(n.id));
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Notifications</h1>
          <p>All system notifications across managers and technicians</p>
        </div>
        {unread.length > 0 && (
          <button className="btn btn-ghost" onClick={markAllRead}>
            Mark all read ({unread.length})
          </button>
        )}
      </div>
      <div className="page-body">
        <div className="card">
          {isLoading ? (
            <div className="loading-page"><div className="spinner" /><span>Loading…</span></div>
          ) : notifs.length === 0 ? (
            <div className="empty-state"><div className="icon">🔔</div><p>No notifications yet</p></div>
          ) : (
            <div>
              {notifs.map(n => (
                <div
                  key={n.id}
                  className={`notif-item ${!n.read ? 'unread' : ''}`}
                  onClick={() => !n.read && markRead.mutate(n.id)}
                >
                  <div className={`notif-dot ${n.read ? 'read' : ''}`} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                      <span style={{ fontSize: 14 }}>{TYPE_ICON[n.type] || '🔔'}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text3)' }}>
                        {n.recipientType === 'technician' ? 'Technician' : 'Manager'}
                      </span>
                    </div>
                    <div className="notif-msg">{n.message}</div>
                    <div className="notif-time">
                      {formatDistanceToNow(new Date(n.createdAt), { addSuffix: true })}
                    </div>
                  </div>
                  {!n.read && (
                    <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, flexShrink: 0, paddingTop: 2 }}>NEW</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}