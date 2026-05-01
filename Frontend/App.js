import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { api } from './api/client.js';
import Dashboard from './components/Dashboard.jsx';
import QuotesPage from './components/QuotesPage.jsx';
import JobsPage from './components/JobsPage.jsx';
import TechnicianPage from './components/TechnicianPage.jsx';
import NotificationsPage from './components/NotificationsPage.jsx';

const qc = new QueryClient({ defaultOptions: { queries: { staleTime: 5000, retry: 1 } } });
function initials(name) { return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(); }

function AppInner() {
  const [page, setPage] = useState('dashboard');
  const [managerCtx] = useState('m1');
  const [techCtx, setTechCtx] = useState('t1');

  const { data: managers = [] } = useQuery({ queryKey: ['managers'], queryFn: api.getManagers });
  const { data: technicians = [] } = useQuery({ queryKey: ['technicians'], queryFn: api.getTechnicians });
  const { data: allNotifs = [] } = useQuery({
    queryKey: ['notifications', 'all'],
    queryFn: () => api.getNotifications(),
    refetchInterval: 4000,
  });

  const unreadCount = allNotifs.filter(n => !n.read).length;
  const manager = managers.find(m => m.id === managerCtx);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-mark">
            <div className="logo-icon">B</div>
            <span className="logo-text">Brix Field</span>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">Manager View</div>
          {[
            { id: 'dashboard', icon: '◈', label: 'Dashboard' },
            { id: 'quotes',    icon: '◻', label: 'Quotes' },
            { id: 'jobs',      icon: '⊞', label: 'All Jobs' },
          ].map(item => (
            <button
              key={item.id}
              className={`nav-item ${page === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              <span className="icon">{item.icon}</span> {item.label}
            </button>
          ))}
          <button
            className={`nav-item ${page === 'notifications' ? 'active' : ''}`}
            onClick={() => setPage('notifications')}
          >
            <span className="icon">🔔</span> Notifications
            {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
          </button>
        </div>

        <div className="sidebar-section" style={{ marginTop: 16 }}>
          <div className="sidebar-label">Technician View</div>
          {technicians.map(t => (
            <button
              key={t.id}
              className={`nav-item ${page === 'technician' && techCtx === t.id ? 'active' : ''}`}
              onClick={() => { setTechCtx(t.id); setPage('technician'); }}
            >
              <div style={{ width:20, height:20, fontSize:9, background:'var(--accent)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, flexShrink:0 }}>
                {initials(t.name)}
              </div>
              {t.name.split(' ')[0]}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 'auto', padding: '0 12px' }}>
          {manager && (
            <div style={{ padding: '12px 10px', borderTop: '1px solid var(--border)', marginTop: 8 }}>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4 }}>Signed in as manager</div>
              <div className="chip">
                <div className="chip-avatar">{initials(manager.name)}</div>
                {manager.name}
              </div>
            </div>
          )}
        </div>
      </aside>

      <main className="main">
        {page === 'dashboard'     && <Dashboard managerId={managerCtx} />}
        {page === 'quotes'        && <QuotesPage managerId={managerCtx} />}
        {page === 'jobs'          && <JobsPage managerId={managerCtx} />}
        {page === 'technician'    && <TechnicianPage technicianId={techCtx} />}
        {page === 'notifications' && <NotificationsPage />}
      </main>
    </div>
  );
}

export default function App() {
  return <QueryClientProvider client={qc}><AppInner /></QueryClientProvider>;
}