import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import MacList from './MacList';
import MacDisplay from './MacDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MacList />
        <MacDisplay />
      
      </header>
    </div>
  );
}

export default App;
