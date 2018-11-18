import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
  diff: true
})

export default createStore(rootReducer, applyMiddleware(logger))
