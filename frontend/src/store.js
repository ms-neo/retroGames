import {configureStore} from '@reduxjs/toolkit'
import gamesReducer from './redux/features/gamesSlice.js'
import authReducer from './redux/features/authSlice.js'

const initialState = {
  admin:{
    admin:JSON.parse(localStorage.getItem('admin'))?
    JSON.parse(localStorage.getItem('admin'))
    :null
  }
}
 const store = configureStore({
    reducer:{
        games:gamesReducer,
        admin:authReducer
    },
    preloadedState:initialState
})

export default store