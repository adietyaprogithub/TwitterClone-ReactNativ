import {configureStore} from '@reduxjs/toolkit';
import Slice from './Reducre';

const store = configureStore({
  reducer: {
    name: Slice,
  },
});


export default store ;