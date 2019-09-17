import React from 'react';
import {watchList} from '../src/data';

function WatchDisplay(props) {
  return (
    <div className="characters-list-wrapper">
    {
      watchList.map((info)  => (
        <div className="character-card" key={info.id}>
        <p>{info.name}</p>
        </div>
      ))
    }
    </div>
  )

}

export default WatchDisplay;