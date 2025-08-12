import React, { useState } from 'react';
import { Edit, Trash2, Save, X } from 'lucide-react';

const CommentCard = ({ comment, onUpdate, onDelete, isLoading = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    content: comment.content,
    author: comment.author
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditData({
      content: comment.content,
      author: comment.author
    });
  };

  const handleSave = async () => {
    if (editData.content.trim() && editData.author.trim()) {
      await onUpdate(comment.id, editData);
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (isEditing) {
    return (
      <div style={styles.card}>
        <div style={styles.editForm}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Author</label>
            <input
              type="text"
              name="author"
              value={editData.author}
              onChange={handleChange}
              style={styles.input}
              disabled={isLoading}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Comment</label>
            <textarea
              name="content"
              value={editData.content}
              onChange={handleChange}
              style={styles.textarea}
              rows={3}
              disabled={isLoading}
            />
          </div>
          
          <div style={styles.buttonGroup}>
            <button
              onClick={handleSave}
              style={styles.saveButton}
              disabled={isLoading || !editData.content.trim() || !editData.author.trim()}
            >
              <Save size={14} />
              {isLoading ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={handleCancelEdit}
              style={styles.cancelButton}
              disabled={isLoading}
            >
              <X size={14} />
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.authorInfo}>
          <span style={styles.author}>{comment.author}</span>
          <span style={styles.date}>{formatDate(comment.created_at)}</span>
        </div>
        
        <div style={styles.actions}>
          <button
            onClick={handleEdit}
            style={styles.editButton}
            disabled={isLoading}
            title="Edit comment"
          >
            <Edit size={14} />
          </button>
          <button
            onClick={() => onDelete(comment.id)}
            style={styles.deleteButton}
            disabled={isLoading}
            title="Delete comment"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
      
      <div style={styles.content}>
        {comment.content}
      </div>
      
      {comment.updated_at !== comment.created_at && (
        <div style={styles.updatedInfo}>
          Edited {formatDate(comment.updated_at)}
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  author: {
    fontWeight: '600',
    color: '#1f2937',
    fontSize: '14px'
  },
  date: {
    fontSize: '12px',
    color: '#6b7280'
  },
  actions: {
    display: 'flex',
    gap: '8px'
  },
  editButton: {
    backgroundColor: 'transparent',
    border: '1px solid #d1d5db',
    color: '#6b7280',
    padding: '6px',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s'
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: '1px solid #f87171',
    color: '#ef4444',
    padding: '6px',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s'
  },
  content: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#374151',
    whiteSpace: 'pre-wrap'
  },
  updatedInfo: {
    fontSize: '12px',
    color: '#6b7280',
    fontStyle: 'italic',
    marginTop: '8px',
    paddingTop: '8px',
    borderTop: '1px solid #f3f4f6'
  },
  editForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  label: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#374151'
  },
  input: {
    padding: '6px 8px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none'
  },
  textarea: {
    padding: '6px 8px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '14px',
    resize: 'vertical',
    outline: 'none',
    fontFamily: 'inherit'
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px'
  },
  saveButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  cancelButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#6b7280',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer'
  }
};

export default CommentCard;