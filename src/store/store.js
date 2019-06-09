import { createStore, combineReducers } from 'redux';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import quickButtons from './reducers/quickButtonsReducer';

const reducer = combineReducers({ behavior, messages, quickButtons });

export default createStore(
  reducer, {}
);
