import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunk))
);

export default store;
