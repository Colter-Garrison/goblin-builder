import React from 'react';

export default function Goblin(props) {
  return (
    <div 
      className='goblin' 
      onClick={() => props.handleDeleteGoblin && props.handleDeleteGoblin(props.goblin.name)}>
      <h3>{props.goblin.name}</h3>  
      <img src="goblin.png" style={{ backgroundColor: props.goblin.color }} />
      <p>{props.goblin.hp} HP</p>
    </div>
  );
}
