/**
 * Created by Dmitriy Prilutsky on 15.12.2016.
 */
import { combineReducers } from 'redux'
import user from './user.jsx'
import page from './page.jsx'

export default combineReducers({
  user,
  page
})
