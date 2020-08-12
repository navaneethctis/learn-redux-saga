import React from 'react';

export const UsersList = ({ deleteUser, users }) => (
  <div className='mt-5'>
    <h2 className='title' style={{ textAlign: 'center' }}>
      Users
    </h2>
    {users &&
      users.map(user => (
        <div
          className='box is-flex'
          key={user.name}
          style={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <h3 className='subtitle mb-0'>{user.name}</h3>
          <button
            className='button is-danger is-outlined'
            onClick={() => deleteUser(user.name)}
          >
            Delete
          </button>
        </div>
      ))}
  </div>
);
