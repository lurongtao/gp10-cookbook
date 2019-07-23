import {
  createStore,
  applyMiddleware
} from 'redux'

import { Map } from 'immutable'

import Thunk from 'redux-thunk'

import reducer from './reducer'

const store = createStore(reducer, Map({}), applyMiddleware(Thunk))

export default store