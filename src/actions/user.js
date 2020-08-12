export const TYPES = {
  CLEAR_USER: 'user/CLEAR_USER',
  CREATE_USER: 'user/CREATE_USER',
  DELETE_USER: 'user/DELETE_USER',
  READ_USERS: 'user/READ_USERS',
  SET_ERROR_MESSAGE: 'user/SET_ERROR_MESSAGE',
  SET_USER: 'user/SET_USER',
  SET_USERS: 'user/SET_USERS'
};

export const clearUser = userName => ({
  payload: userName,
  type: TYPES.CLEAR_USER
});

export const createUser = user => ({
  payload: user,
  type: TYPES.CREATE_USER
});

export const deleteUser = userName => ({
  payload: userName,
  type: TYPES.DELETE_USER
});

export const readUsers = () => ({
  type: TYPES.READ_USERS
});

export const setErrorMessage = errorMessage => ({
  payload: errorMessage,
  type: TYPES.SET_ERROR_MESSAGE
});

export const setUser = user => ({
  payload: user,
  type: TYPES.SET_USER
});

export const setUsers = users => ({
  payload: users,
  type: TYPES.SET_USERS
});
