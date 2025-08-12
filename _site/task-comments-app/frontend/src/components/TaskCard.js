import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const TaskCard = ({ task, commentsCount = 0 }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'in-progress': return '#f59e0b';
      case 'pending': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle size={16} />;
      case 'in-progress': return <Clock size={16} />;
      case 'pending': return <AlertCircle size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.title}>{task.title}</h3>
        <div 
          style={{
            ...styles.status,
            backgroundColor: getStatusColor(task.status),
          }}
        >
          {getStatusIcon(task.status)}
          <span style={styles.statusText}>
            {task.status.replace('-', ' ')}
          </span>
        </div>
      </div>
      
      <p style={styles.description}>{task.description}</p>
      
      <div style={styles.cardFooter}>
        <div style={styles.commentsCount}>
          <MessageCircle size={16} />
          <span>{commentsCount} comments</span>
        </div>
        
        <Link 
          to={`/task/${task.id}`}
          style={styles.viewButton}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.2s, transform 0.2s',
    cursor: 'pointer'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0'
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    borderRadius: '12px',
    color: 'white',
    fontSize: '12px',
    fontWeight: '500'
  },
  statusText: {
    textTransform: 'capitalize'
  },
  description: {
    color: '#6b7280',
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '16px'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  commentsCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#6b7280',
    fontSize: '14px'
  },
  viewButton: {
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '6px 12px',
    border: '1px solid #2563eb',
    borderRadius: '4px',
    transition: 'all 0.2s'
  }
};

export default TaskCard;