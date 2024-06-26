import { configureStore } from '@reduxjs/toolkit';

import  productReducer  from '../Slice/productSlice';
import cartReducer from '../Slice/cartSlice';


export const store = configureStore({
    reducer: {
      
      cart: cartReducer,
      products: productReducer
    },
  });
  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

  