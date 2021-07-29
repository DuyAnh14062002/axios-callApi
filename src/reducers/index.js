import {combineReducers} from 'redux'
import products from './products'
import itemEditting from './itemEditting'
const MyReducers = combineReducers({
  products,
  itemEditting
}) 
export default MyReducers