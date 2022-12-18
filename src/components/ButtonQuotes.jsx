import React from 'react';

const ButtonQuotes = ({dual, color}) => {
  return (
    <div className='container-button'>
      <button onClick={dual} style={{background: `${color}`}}>▶</button>
    </div>
  );
};

export default ButtonQuotes;