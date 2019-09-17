import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import MacList from './MacList';
import MacDisplay from './MacDisplay';
import { macs } from './data';

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">Mac</NavLink>
        </li>
        <li>
          <NavLink to="/ipad" activeClassName="activeNavButton">iPad</NavLink>
        </li>
        <li>
          <NavLink to="/iphone" activeClassName="activeNavButton">iPhone</NavLink>
        </li>
        <li>
          <NavLink to="/watch" activeClassName="activeNavButton">Watch</NavLink>
        </li>
        <li>
          <NavLink to="/tv" activeClassName="activeNavButton">TV</NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName="activeNavButton">Music</NavLink>
        </li>
        <li>
          <NavLink to="/support" activeClassName="activeNavButton">Support</NavLink>
        </li>
        
        <Route exact path="/" render={props => <MacList {...props} macs={macs}/> } />
        <Route exact path="/ipad"/>
      
      </ul>
    </div>
  );
}

export default App;
