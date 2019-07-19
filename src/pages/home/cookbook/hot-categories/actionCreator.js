import { LOADDATA } from './actionTypes'

import http from 'utils/http'

export const loadDataSync = (data) => {
  return {
    type: LOADDATA,
    data
  }
}

export const loadDataAsync = () => {
  return async (dispatch) => {
    let result = await http('/api/category')
    dispatch(loadDataSync(result))
  }
}