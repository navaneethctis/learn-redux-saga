import React from 'react';

export default ({ errorMessage, setErrorMessage }) => (
  <div className='notification is-danger px-4 py-4'>
    <button className='delete' onClick={() => setErrorMessage('')}></button>
    {errorMessage}
  </div>
);
