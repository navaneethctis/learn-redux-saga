import { TYPES } from '../actions/user';

const INITIAL_STATE = {
  errorMessage: '',
  users: []
};

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TYPES.CLEAR_USER:
      return {
        ...state,
        users: state.users.filter(user => user.name !== payload)
      };
    case TYPES.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: payload
      };
    case TYPES.SET_USER:
      return {
        ...state,
        users: [...state.users, payload]
      };
    case TYPES.SET_USERS:
      return {
        ...state,
        users: payload
      };
    default:
      return state;
  }
};
