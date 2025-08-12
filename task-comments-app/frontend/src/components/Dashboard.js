import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import LoadingSpinner from './LoadingSpinner';
import { taskAPI, commentAPI } from '../services/api';
import { RefreshCw } from 'lucide-react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [commentsCount, setCommentsCount] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskAPI.getTasks();
      const tasksData = response.data.data;
      setTasks(tasksData);
      
      // Fetch comments count for each task
      const counts = {};
      for (const task of tasksData) {
        try {
          const commentsResponse = await commentAPI.getComments(task.id);
          counts[task.id] = commentsResponse.data.count || 0;
        } catch (err) {
          counts[task.id] = 0;
        }
      }
      setCommentsCount(counts);
      
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <LoadingSpinner size={32} />
        <p style={styles.loadingText}>Loading tasks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <p>{error}</p>
          <button onClick={fetchTasks} style={styles.retryButton}>
            <RefreshCw size={16} />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Task Dashboard</h1>
        <p style={styles.subtitle}>
          Manage your tasks and comments
        </p>
      </div>

      <div style={styles.stats}>
        <div style={styles.stat}>
          <span style={styles.statNumber}>{tasks.length}</span>
          <span style={styles.statLabel}>Total Tasks</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNumber}>
            {tasks.filter(task => task.status === 'completed').length}
          </span>
          <span style={styles.statLabel}>Completed</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNumber}>
            {tasks.filter(task => task.status === 'in-progress').length}
          </span>
          <span style={styles.statLabel}>In Progress</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNumber}>
            {Object.values(commentsCount).reduce((sum, count) => sum + count, 0)}
          </span>
          <span style={styles.statLabel}>Total Comments</span>
        </div>
      </div>

      <div style={styles.taskList}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            commentsCount={commentsCount[task.id] || 0}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  header: {
    marginBottom: '30px',
    textAlign: 'center'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280'
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  },
  stat: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  },
  statNumber: {
    display: 'block',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: '4px'
  },
  statLabel: {
    fontSize: '14px',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  taskList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  loadingText: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: '10px'
  },
  error: {
    textAlign: 'center',
    color: '#ef4444',
    padding: '20px'
  },
  retryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px auto'
  }
};
export default Dashboard;