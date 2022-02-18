import { configureStore } from '@reduxjs/toolkit';

import shopSlice from './features/shopSlice';

export default configureStore({
  reducer: {
    shop: shopSlice
  }
});