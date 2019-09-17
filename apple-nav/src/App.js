import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import MacList from './MacList';
import IpadDisplay from './IpadDisplay';
import IphoneDisplay from './IphoneDisplay';
import WatchDisplay from './WatchDisplay';
import TVDisplay from './TVDisplay';
import MusicDisplay from './MusicDisplay';
import SupportDisplay from './SupportDisplay';

import { macs, ipadList, iphoneList, watchList, tvList, musicList, supportList } from './data';



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
      <Route exact path="/watch" render={props => <WatchDisplay {...props} watchlist={watchList}/> } />
      <Route exact path="/tv" render={props => <TVDisplay {...props} tvlist={tvList}/> } />
      <Route exact path="/music" render={props => <MusicDisplay {...props} musiclist={musicList}/> } />
      <Route exact path="/support" render={props => <SupportDisplay {...props} supportlist={supportList}/> } />
    </div>
  );
}

export default App;
