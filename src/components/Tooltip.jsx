import React, { useEffect, useState } from 'react';
import '../Tooltip.css';

const EVENT_NAME = 'natalia_tooltip';

// una función de un argumento que devuelve otra función para poder pasar el content del tooltip
export const ShowTooltip = (content) => (event) => {
  // esto es la función customizada que se escribe así
  var tooltipEvent = new CustomEvent(EVENT_NAME, {
    detail: {
      visible: true,
      position: {
        x: event.clientX + 10,
        y: event.clientY - 10,
      },
      // esto es lo mismo que poner
      // content: content,
      content,
    },
  });
  document.dispatchEvent(tooltipEvent);
};

export const HideTooltip = () => {
  // función customizada
  var tooltipEvent = new CustomEvent(EVENT_NAME, {
    detail: {
      visible: false,
    },
  });
  document.dispatchEvent(tooltipEvent);
};

const Tooltip = () => {
  // el estado inicial del tooltip, esta con hooks
  const [tooltip, setTooltip] = useState({
    visible: false,
    position: { x: '0px', y: '0px' },
    content: '',
  });

  // Esto es componentDidMount para que se registre el addEventListener una vez, aqui se modifica el estado, el event detail es una copia de detail de la función showtooltip
  useEffect(() => {
    // mi llamada con mi función customizada
    document.addEventListener(EVENT_NAME, (event) => {
      setTooltip({
        ...tooltip,
        ...event.detail,
      });
    });
  }, []);

  if (!tooltip.visible) {
    return null;
  }

  return (
    <div
      className='tooltip'
      style={{
        top: tooltip.position.y,
        left: tooltip.position.x,
      }}
    >
      {tooltip.content}
    </div>
  );
};

export default Tooltip;
