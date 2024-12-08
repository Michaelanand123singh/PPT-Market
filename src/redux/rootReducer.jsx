import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import presentationReducer from './reducer/presentationReducer';
import cartReducer from './reducer/cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  presentations: presentationReducer,
  cart: cartReducer,
});

export default rootReducer;
