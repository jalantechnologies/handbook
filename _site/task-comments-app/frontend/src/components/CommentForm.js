import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const CommentForm = ({ onSubmit, onCancel, initialData = null, isLoading = false }) => {
  const [formData, setFormData] = useState({
    content: initialData?.content || '',
    author: initialData?.author || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.content.trim() && formData.author.trim()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter your name"
          style={styles.input}
          required
          disabled={isLoading}
        />
      </div>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Comment</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your comment here..."
          style={styles.textarea}
          rows={4}
          required
          disabled={isLoading}
        />
      </div>
      
      <div style={styles.buttonGroup}>
        <button
          type="submit"
          style={styles.submitButton}
          disabled={isLoading || !formData.content.trim() || !formData.author.trim()}
        >
          <Plus size={16} />
          {isLoading ? 'Saving...' : (initialData ? 'Update Comment' : 'Add Comment')}
        </button>
        
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            style={styles.cancelButton}
            disabled={isLoading}
          >
            <X size={16} />
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px'
  },
  formGroup: {
    marginBottom: '16px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px'
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  textarea: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '14px',
    resize: 'vertical',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit'
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px'
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  cancelButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#6b7280',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
};

export default CommentForm;