import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {configureStore,combineReducers} from '@reduxjs/toolkit';
import  App  from './App';


import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/usersSlice';


// export default configureStore({
//   reducer: {
//       counter: counterReducer,
//       searchShoes: searchShoesReducer,
//   },    
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//       serializableCheck: false
//   }),
// });
const reducer = combineReducers({
  auth:authReducer,
  bugs:bugReducer,
  user:userReducer,
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
}),
})

ReactDOM.render(
    <Provider store={store}>
      <App />  
    </Provider>
    ,


  document.getElementById('root')
);

