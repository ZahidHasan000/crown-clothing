import { createStore, applyMiddleware } from 'redux';

//Redux-persist(localStorage/sessionStorage)
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//Redux-persist(localStorage/sessionStorage)
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

//Redux-persist(localStorage/sessionStorage)
export const persistor = persistStore(store)

// const store = createStore(rootReducer, applyMiddleware(...middlewares))

//Redux-persist(localStorage/sessionStorage)
// export default { store, persistor };

// export default store;