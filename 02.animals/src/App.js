import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

const getRandomAnimal = () => {
  const animals = ['bird', 'dog', 'cat', 'horse', 'cow', 'gator'];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);
  console.log('Rendering...  ' + new Date().toISOString());

  const handleClick = e => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, idx) => (
    <AnimalShow type={animal} key={idx} />
  ));

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
