import { LOADDATA } from './actionTypes'

const defaultState = {
  list: {}
}

const categoriesReducer = (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return {
        list: action.data.data
      }
    default: 
      return state
  }
}

export default categoriesReducer