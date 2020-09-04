import React from 'react';
import '../Perro.scss';
import Gato from './Gato';

const Perro = () => {
  return (
    <div className='perro'>
      <Gato text='bigote-feo' />
      <Gato text='paticas' />
      <Gato text='cola' />
      <Gato text='maine-coon' />
    </div>
  );
};

export default Perro;
