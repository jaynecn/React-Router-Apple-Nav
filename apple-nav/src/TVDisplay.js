import React from 'react';
import {tvList} from '../src/data';

function TVDisplay(props) {
  return (
    <div className="characters-list-wrapper">
    {
      tvList.map((info)  => (
        <div className="character-card" key={info.id}>
        <p>{info.name}</p>
        </div>
      ))
    }
    </div>
  )

}

export default TVDisplay;