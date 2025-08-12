import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, List, Plus } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <List size={24} />
          <span>Task Manager</span>
        </Link>
        
        <nav style={styles.nav}>
          <Link 
            to="/" 
            style={{
              ...styles.navLink,
              ...(isActive('/') ? styles.activeLink : {})
            }}
          >
            <Home size={18} />
            <span>Dashboard</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'white',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: 'background-color 0.2s'
  },
  activeLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }
};

export default Header;