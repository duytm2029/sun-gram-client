import { fork } from 'redux-saga/effects';

import * as userSagas from './user';

// our root saga.
// It receives the application against which we will be making requests
function* root(feathersApp) {
  // fork... why fork? So many unknowns right now.
  // This appears to be a list of sagas that will allow us to handle multiple
  // actions being dispatched from our UI.
  // This ties all of our sagas together.

  yield [
    fork(userSagas.watchUserAuth, feathersApp),
    fork(userSagas.watchLoginUserSaga, feathersApp),
  ];
}

// export the root saga. Let's take a look at where we import this...
export default root;