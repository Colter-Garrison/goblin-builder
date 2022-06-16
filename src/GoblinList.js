import React from 'react';
import Goblin from './Goblin';

export default function GoblinList({ goblins, handleDeleteGoblin }) {
  return (
    <div className='goblin-list quarter'>
      {goblins.map((goblin, i) => (
        <Goblin key={goblin.name + i} goblin={goblin} handleDeleteGoblin={handleDeleteGoblin} />
      ))}
    </div>
  );
}