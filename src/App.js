import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import { SuggestionProvider } from './context/SuggestionContext';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TripPlanr 🧳</h1>

    <SuggestionProvider>
      <Home/>
    </SuggestionProvider>
    </div>

  );
}

export default App;
