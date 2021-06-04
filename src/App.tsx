import React, { useState } from 'react';
import './App.css';

function App() {
  let [ name, setName ] = useState('');

  let inputChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div> This is the Remix bitch</div>
      <input type="text" value={name} onChange={ inputChange }/>
      Hola: {name}-chan
      Bienvenida
    </div>
  );
}

export default App;