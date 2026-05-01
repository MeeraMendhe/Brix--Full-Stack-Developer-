import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client.js';
import AssignModal from './AssignModal.jsx';

export default function QuotesPage({ managerId }) {
  const [filter, setFilter] = useState('unscheduled');
  const [selected, setSelected] = useState(null);

  const { data: quotes = [], isLoading } = useQuery({
    queryKey: ['quotes', filter],
    queryFn: () => api.getQuotes(filter || undefined),
    refetchInterval: 5000,
  });

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Quotes</h1>
          <p>Assign unscheduled quotes to technicians</p>
        </div>
      </div>
      <div className="page-body">
        <div className="tabs">
          {['unscheduled', 'scheduled', ''].map((f, i) => (
            <button key={i} className={`tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f === '' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="card">
          <div className="card-header">
            <span>{quotes.length} quote{quotes.length !== 1 ? 's' : ''}</span>
            {filter === 'unscheduled' && (
              <span style={{ fontSize: 12, color: 'var(--amber)', fontWeight: 500 }}>
                Click a row to assign →
              </span>
            )}
          </div>
          {isLoading ? (
            <div className="loading-page"><div className="spinner" /><span>Loading…</span></div>
          ) : quotes.length === 0 ? (
            <div className="empty-state"><div className="icon">◻</div><p>No quotes found</p></div>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map(q => (
                    <tr
                      key={q.id}
                      className={q.status === 'unscheduled' ? 'quote-row' : ''}
                      onClick={() => q.status === 'unscheduled' && setSelected(q)}
                    >
                      <td style={{ fontWeight: 500 }}>{q.title}</td>
                      <td style={{ color: 'var(--text2)', fontSize: 12.5 }}>{q.address}</td>
                      <td><span className={`status ${q.status}`}>{q.status}</span></td>
                      <td style={{ fontFamily: 'DM Mono', fontSize: 12, color: 'var(--text3)' }}>
                        {new Date(q.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
                      </td>
                      <td>
                        {q.status === 'unscheduled' && (
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={(e) => { e.stopPropagation(); setSelected(q); }}
                          >
                            Assign
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {selected && (
        <AssignModal quote={selected} managerId={managerId} onClose={() => setSelected(null)} />
      )}
    </>
  );
}