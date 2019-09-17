import React from 'react';
import {ipadList} from '../src/data';

function ipadDisplay(props) {
  console.log(props);
  return (
    <div className="characters-list-wrapper">
    {
      ipadList.map((info)  => (
        <div className="character-card" key={info.id}>
        <p>{info.name}</p>
        </div>
      ))
    }
    </div>
  )

}

export default ipadDisplay;