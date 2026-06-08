import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice =
createSlice({

  name:"wishlist",

  initialState:{
    wishlistItems:[]
  },

  reducers:{

    addWishlist:(state,action)=>{
      state.wishlistItems.push(
        action.payload
      );
    },

    removeWishlist:(state,action)=>{
      state.wishlistItems =
      state.wishlistItems.filter(
        item =>
        item.id !== action.payload
      );
    }

  }

});

export const {
  addWishlist,
  removeWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;