import React from 'react';
import Display from './Display';
import styles from './App.module.css';

function App() {
  return (
    /* calling the Display component by passing the top and left as props */
    <div className={styles.outer}>
      <Display top={ "25vh"} left={"21vw"}/>
    </div>
  );
}

export default App;
