import React from 'react';
import '../Gato.scss';
import { ShowTooltip, HideTooltip } from './Tooltip';

const Gato = (props) => {
  return (
    <div className='gato'>
      {/* esas props text es el content de mi tooltip como argumento */}
      <div className='bigote' onMouseMove={ShowTooltip(props.text)} onMouseLeave={HideTooltip}></div>
    </div>
  );
};

export default Gato;
