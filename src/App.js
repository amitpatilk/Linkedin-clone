import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* App Body */}
      <div className="app_body">
        <Sidebar/>
        {/* Feed */}
        {/* Widget */}
      </div>

        
    </div>
  );
}

export default App;
