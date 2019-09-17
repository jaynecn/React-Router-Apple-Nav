import React from 'react';
import { macs } from './data';
import MacDisplay from './MacDisplay';

function MacList (props) {
  // debugger// props.macs.name
  console.log(props);
  return (
    <div className="characters-list-wrapper">
    {
      macs.map((info)  => (
        <div className="character-card" key={info.id}>
        <p>{info.name}</p>
        </div>
      ))
    }
    </div>
  )
}



export default MacList;