import { useState } from 'react';
import './App.css';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

function App() {
  const [goblinFormName, setGoblinFormName] = useState('');
  const [goblinFormHP, setGoblinFormHP] = useState('');
  const [goblinFormColor, setGoblinFormColor] = useState('');
  const [visibleGoblins, setVisibleGoblins] = useState('');
  const [allGoblins, setAllGoblins] = useState([]);
  
  function submitGoblin(e) {
    e.preventDefault();

    const goblin = {
      name: goblinFormName,
      hp: goblinFormHP,
      color: goblinFormColor,
    };

    setAllGoblins([...allGoblins, goblin]);
    setGoblinFormName('');
    setGoblinFormHP('');
    setGoblinFormColor('lightgreen');
  }

  function handleDeleteGoblin(name) {
    const goblinIndex = allGoblins.findIndex((goblin) => goblin.name === name);
    allGoblins.splice(goblinIndex, 1);
    setVisibleGoblins([...allGoblins]);
  }

  function handleFilterGoblins(search) {
    const searchGoblins = allGoblins.filter((goblin) => goblin.name.includes(search));
    search ? setVisibleGoblins(searchGoblins) : setVisibleGoblins(allGoblins);
  }

  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin goblin={{
          name: goblinFormName,
          hp: goblinFormHP,
          color: goblinFormColor
        }}/>
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm 
        submitGoblin={submitGoblin}
        goblinFormName={goblinFormName}
        setGoblinFormName={setGoblinFormName}
        goblinFormColor={goblinFormColor}
        setGoblinFormColor={setGoblinFormColor}
        goblinFormHP={goblinFormHP}
        setGoblinFormHP={setGoblinFormHP}
      />
      <GoblinList 
        goblins={allGoblins} // this takes in an array of goblins. If the filteredGoblins has a length, use that array. Otherwise, use the allGoblins array 
        handleDeleteGoblin={handleDeleteGoblin} // note that the goblin list has access to the ability to delete
      />
    </div>
  );
}

export default App;
