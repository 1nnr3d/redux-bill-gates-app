import { createSlice } from '@reduxjs/toolkit';

import items from '../items.json';

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    items,
    money: 100000000000,
    total: 0,
    purchasedItems: []
  },
  reducers: {
    addToPurchased: (state, action) => {
      const itemIndex = state.purchasedItems.findIndex(item => item.productID === action.payload.productID);

      if (itemIndex !== -1) {
        state.purchasedItems[itemIndex] = { ...action.payload, productNumber: action.payload.productNumber + 1 };
      } else {
        const item = { ...action.payload, productNumber: 1 };
        state.purchasedItems.push(item);
      }

      state.total += action.payload.productPrice;
      state.money -= action.payload.productPrice;

    },
    removeToPurchased: (state, action) => {
      const itemIndex = state.purchasedItems.findIndex(item => item.productID === action.payload.productID);

      if (action.payload.productNumber === 1) {
        state.purchasedItems = state.purchasedItems.filter(item => item.productID !== action.payload.productID);
      } else {
        state.purchasedItems[itemIndex] = { ...action.payload, productNumber: action.payload.productNumber - 1 };
      }

      state.total -= action.payload.productPrice;
      state.money += action.payload.productPrice;
    }
  }
})

export const { addToPurchased, removeToPurchased } = shopSlice.actions;

export default shopSlice.reducer;