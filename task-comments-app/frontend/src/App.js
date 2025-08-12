import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TaskDetail from './components/TaskDetail';

const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task/:taskId" element={<TaskDetail />} />
        </Routes>
      </main>
    </div>
  );
};

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb'
  },
  main: {
    paddingTop: '0'
  }
};

export default App;