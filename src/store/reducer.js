import {
  combineReducers
} from 'redux'

import { reducer as foodlist } from 'cookbook/swiper/'

const reducer = combineReducers({
  foodlist
})

export default reducer