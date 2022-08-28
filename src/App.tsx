import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages'


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign"  element={<h1>hello world</h1>}/>
          <Route path='*' element={<h1>404 not found</h1>}/>
          </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
