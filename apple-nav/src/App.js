import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import MacList from './MacList';
import IpadDisplay from './IpadDisplay';
import IphoneDisplay from './IphoneDisplay';
import { macs, ipadList, iphoneList } from './data';

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
      </ul>
      <Route exact path="/" render={props => <MacList {...props} macs={macs}/> } />
      <Route exact path="/ipad" render={props => <IpadDisplay {...props} ipadlist={ipadList}/> } />
      <Route exact path="/iphone" render={props => <IphoneDisplay {...props} iphonelist={iphoneList}/> } />
    </div>
  );
}

export default App;
