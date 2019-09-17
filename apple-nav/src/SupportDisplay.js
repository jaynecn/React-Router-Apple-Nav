import React from 'react';
import {supportList} from '../src/data';

function SupportDisplay(props) {
  return (
    <div className="characters-list-wrapper">
    {
      supportList.map((info)  => (
        <div className="character-card" key={info.id}>
        <p>{info.name}</p>
        </div>
      ))
    }
    </div>
  )

}

export default SupportDisplay;