import React from 'react';
import {musicList} from '../src/data';

function MusicDisplay(props) {
  return (
    <div className="characters-list-wrapper">
    {
      musicList.map((info)  => (
        <div className="character-card" key={info.id}>
        <p>{info.name}</p>
        </div>
      ))
    }
    </div>
  )

}

export default MusicDisplay;