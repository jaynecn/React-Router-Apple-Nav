import React from 'react';
import { iphoneList } from './data';

function IphoneDisplay (props) {
  return (
    <div className="characters-list-wrapper">
    {
      iphoneList.map((info)  => (
        <div className="character-card" key={info.id}>
        <p>{info.name}</p>
        </div>
      ))
    }
    </div>
    
  )
}


export default IphoneDisplay;