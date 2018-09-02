import React from 'react';
import Navigation from './navigation';
import AuthManager from './auth-manager';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignitems: 'center',
    padding: '16px',
    borderBottom: '3px solid #212121',
  },
};

const AppBar = () => (
  <header style={styles.header}>
    <AuthManager />
    <Navigation />
  </header>
);

export default AppBar;
