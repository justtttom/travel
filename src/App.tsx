import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage ,SignInPage,RegisterPage} from './pages'


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sigIn"  element={<SignInPage/>}/>
          <Route path="/register"  element={<RegisterPage/>}/>
          {/* <Route path="/detail/:touristRouteId"  element={<DetailPage/>}/> */}
          <Route path='*' element={<h1>404 not found</h1>}/>
          </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
