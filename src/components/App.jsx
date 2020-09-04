import React from 'react';
import '../App.scss';
import Tooltip, { ShowTooltip, HideTooltip } from './Tooltip';
import Perro from './Perro';

function App() {
  return (
    <div className='App'>
      <div className='rojo' onMouseMove={ShowTooltip('holita')} onMouseLeave={HideTooltip}></div>
      <Tooltip />
      <Perro />
    </div>
  );
}

export default App;
