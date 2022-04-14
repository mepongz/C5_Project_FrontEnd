import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import playersReducer from './pages/Players/slice'
import playersSaga from './pages/Players/saga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    players: playersReducer
  },
  middleware: [sagaMiddleware],
})

// Then run the saga
sagaMiddleware.run(playersSaga)
