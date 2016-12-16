/**
 * Created by Dmitriy Prilutsky on 15.12.2016.
 */
import { createStore, applyMiddleware } from 'redux'

import rootReducer   from '../reducers/reducer.jsx'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const logger = createLogger()
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

  if (module.hot) {
    module.hot.accept('../reducers/reducer.jsx', () => {
      const nextRootReducer = require('../reducers/reducer.jsx').default;
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
