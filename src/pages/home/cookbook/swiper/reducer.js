import { LOADDATA } from './actionTypes'

import { Map, List, fromJS } from 'immutable'

const defaultState = Map({
  list: List([])
})

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      // return {
      //   list: action.list
      // }
      // return state.updateIn(['list'], value => value.push(fromJS(action.list)))
      return state.set('list', fromJS(action.list))
    default:
      return state
  }
}

export default reducer