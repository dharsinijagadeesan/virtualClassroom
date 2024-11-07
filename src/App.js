import React from 'react';
import './App.css';  
import Sidebar from './components/Sidebar';   
import Dashboard from './components/Dashboard'; 
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
