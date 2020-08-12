import {
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

import * as userActions from '../actions/user';

import * as jsonplaceholder from '../apis/jsonplaceholder';

function* createUser({ payload }) {
  try {
    yield call(jsonplaceholder.createUser, payload);

    yield put(
      userActions.setUser({ name: `${payload.firstName} ${payload.lastName}` })
    );
  } catch (error) {
    yield put(userActions.setErrorMessage(error.message));
  }
}

function* deleteUser({ payload }) {
  try {
    yield call(jsonplaceholder.deleteUser, payload);

    yield put(userActions.clearUser(payload));
  } catch (error) {
    yield put(userActions.setErrorMessage(error.message));
  }
}

function* readUsers() {
  try {
    const { data } = yield call(jsonplaceholder.readUsers);

    yield put(userActions.setUsers(data));
  } catch (error) {
    yield put(userActions.setErrorMessage(error.message));
  }
}

function* watchCreateUser() {
  yield takeLatest(userActions.TYPES.CREATE_USER, createUser);
}

function* watchDeleteUser() {
  while (true) {
    const action = yield take(userActions.TYPES.DELETE_USER);

    yield call(deleteUser, action);
  }
}

function* watchReadUsers() {
  yield takeEvery(userActions.TYPES.READ_USERS, readUsers);
}

export default [
  fork(watchReadUsers),
  fork(watchDeleteUser),
  fork(watchCreateUser)
];
