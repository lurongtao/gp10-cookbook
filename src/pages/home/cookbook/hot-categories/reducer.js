import { LOADDATA } from './actionTypes'

import { Map, fromJS } from 'immutable'

const defaultState = Map({
  list: Map({})
})

const categoriesReducer = (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      // return {
      //   list: action.data.data
      // }
      return state.set('list', fromJS(action.data.data))
    default: 
      return state
  }
}

export default categoriesReducer