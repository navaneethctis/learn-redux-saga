import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ErrorNotification from './ErrorNotification';

import { deleteUser, readUsers, setErrorMessage } from '../actions/user';

import { CreateUserForm, UsersList } from './user';

const App = ({
  deleteUser,
  errorMessage,
  readUsers,
  setErrorMessage,
  users
}) => {
  useEffect(() => {
    readUsers();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='container py-5'>
      <div className='columns'>
        <div className='column is-three-fifths'>
          {errorMessage && (
            <ErrorNotification
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
            />
          )}
          <CreateUserForm />
          <UsersList deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { errorMessage, users } }) => ({
  errorMessage,
  users
});

export default connect(mapStateToProps, {
  deleteUser,
  readUsers,
  setErrorMessage
})(App);
