import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createUser } from '../../actions/user';

const CreateUserFormWithoutRedux = ({ createUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    createUser({ firstName, lastName });

    setFirstName('');
    setLastName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='title' style={{ textAlign: 'center' }}>
        Create User
      </h2>
      <div className='field'>
        <div className='label'>First Name</div>
        <div className='control'>
          <input
            className='input'
            onChange={event => setFirstName(event.target.value)}
            required
            type='text'
            value={firstName}
          />
        </div>
      </div>
      <div className='field'>
        <div className='label'>Last Name</div>
        <div className='control'>
          <input
            className='input'
            onChange={event => setLastName(event.target.value)}
            required
            type='text'
            value={lastName}
          />
        </div>
      </div>
      <button className='button is-info is-outlined'>Submit</button>
    </form>
  );
};

export const CreateUserForm = connect(null, { createUser })(
  CreateUserFormWithoutRedux
);
