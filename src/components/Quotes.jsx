import React from 'react';

const Quotes = ({json}) => {

  return (
    <div>
      <p><i class="fa-solid fa-quote-left"></i>{" "}{json.quote}</p>
      <p>{json.author}</p>
    </div>
  );
};

export default Quotes;