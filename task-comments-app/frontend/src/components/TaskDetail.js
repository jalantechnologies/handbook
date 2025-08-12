import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import LoadingSpinner from './LoadingSpinner';
import { taskAPI, commentAPI } from '../services/api';
import { ArrowLeft, MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [operationLoading, setOperationLoading] = useState(false);

  const fetchTask = async () => {
    try {
      const response = await taskAPI.getTask(taskId);
      setTask(response.data.data);
    } catch (err) {
      setError('Failed to fetch task details');
      console.error('Error fetching task:', err);
    }
  };

  const fetchComments = async () => {
    try {
      setCommentsLoading(true);
      const response = await commentAPI.getComments(taskId);
      setComments(response.data.data || []);
    } catch (err) {
      console.error('Error fetching comments:', err);
      setComments([]);
    } finally {
      setCommentsLoading(false);
    }
  };

  const handleAddComment = async (commentData) => {
    try {
      setOperationLoading(true);
      const response = await commentAPI.createComment(taskId, commentData);
      if (response.data.success) {
        setComments(prev => [response.data.data, ...prev]);
        setShowCommentForm(false);
      }
    } catch (err) {
      console.error('Error adding comment:', err);
      alert('Failed to add comment. Please try again.');
    } finally {
      setOperationLoading(false);
    }
  };

  const handleUpdateComment = async (commentId, commentData) => {
    try {
      setOperationLoading(true);
      const response = await commentAPI.updateComment(commentId, commentData);
      if (response.data.success) {
        setComments(prev => 
          prev.map(comment => 
            comment.id === commentId ? response.data.data : comment
          )
        );
      }
    } catch (err) {
      console.error('Error updating comment:', err);
      alert('Failed to update comment. Please try again.');
    } finally {
      setOperationLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) {
      return;
    }

    try {
      setOperationLoading(true);
      const response = await commentAPI.deleteComment(commentId);
      if (response.data.success) {
        setComments(prev => prev.filter(comment => comment.id !== commentId));
      }
    } catch (err) {
      console.error('Error deleting comment:', err);
      alert('Failed to delete comment. Please try again.');
    } finally {
      setOperationLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchTask(), fetchComments()]);
      setLoading(false);
    };

    loadData();
  }, [taskId]);

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
      case 'completed': return <CheckCircle size={20} />;
      case 'in-progress': return <Clock size={20} />;
      case 'pending': return <AlertCircle size={20} />;
      default: return <AlertCircle size={20} />;
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <LoadingSpinner size={32} />
        <p style={styles.loadingText}>Loading task details...</p>
      </div>
    );
  }

  if (error || !task) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <p>{error || 'Task not found'}</p>
          <Link to="/" style={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <Link to="/" style={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
      </div>

      {/* Task Details */}
      <div style={styles.taskCard}>
        <div style={styles.taskHeader}>
          <h1 style={styles.taskTitle}>{task.title}</h1>
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
        
        <p style={styles.taskDescription}>{task.description}</p>
      </div>

      {/* Comments Section */}
      <div style={styles.commentsSection}>
        <div style={styles.commentsHeader}>
          <h2 style={styles.commentsTitle}>
            <MessageCircle size={20} />
            Comments ({comments.length})
          </h2>
          
          {!showCommentForm && (
            <button
              onClick={() => setShowCommentForm(true)}
              style={styles.addCommentButton}
            >
              Add Comment
            </button>
          )}
        </div>

        {/* Add Comment Form */}
        {showCommentForm && (
          <CommentForm
            onSubmit={handleAddComment}
            onCancel={() => setShowCommentForm(false)}
            isLoading={operationLoading}
          />
        )}

        {/* Comments List */}
        {commentsLoading ? (
          <LoadingSpinner size={24} />
        ) : comments.length === 0 ? (
          <div style={styles.noComments}>
            <MessageCircle size={48} color="#d1d5db" />
            <p style={styles.noCommentsText}>No comments yet</p>
            <p style={styles.noCommentsSubtext}>Be the first to add a comment!</p>
          </div>
        ) : (
          <div style={styles.commentsList}>
            {comments.map(comment => (
              <CommentCard
                key={comment.id}
                comment={comment}
                onUpdate={handleUpdateComment}
                onDelete={handleDeleteComment}
                isLoading={operationLoading}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  },
  header: {
    marginBottom: '20px'
  },
  backLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '8px 0',
    transition: 'color 0.2s'
  },
  taskCard: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  },
  taskHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },
  taskTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: '0',
    flex: 1,
    marginRight: '16px'
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '16px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap'
  },
  statusText: {
    textTransform: 'capitalize'
  },
  taskDescription: {
    color: '#4b5563',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '0'
  },
  commentsSection: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px'
  },
  commentsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  commentsTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '20px',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0'
  },
  addCommentButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  commentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  noComments: {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#6b7280'
  },
  noCommentsText: {
    fontSize: '16px',
    fontWeight: '500',
    margin: '12px 0 4px 0',
    color: '#4b5563'
  },
  noCommentsSubtext: {
    fontSize: '14px',
    margin: '0'
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
  }
};

export default TaskDetail;