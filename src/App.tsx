import React from 'react';
import styles from './App.module.css';
import Todos from './pages/Todos';
function App() {
  return (
    <div className={styles.App}>
      <Todos />
    </div>
  );
}

export default App;
