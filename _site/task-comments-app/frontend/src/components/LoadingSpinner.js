import React from 'react';

const LoadingSpinner = ({ size = 24, color = '#2563eb' }) => {
  return (
    <div style={styles.container}>
      <div 
        style={{
          ...styles.spinner,
          width: size,
          height: size,
          borderColor: `${color}20`,
          borderTopColor: color
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  spinner: {
    border: '2px solid',
    borderRadius: '50%',
    borderTopStyle: 'solid',
    animation: 'spin 1s linear infinite'
  }
};

// Add CSS keyframes for animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

export default LoadingSpinner;