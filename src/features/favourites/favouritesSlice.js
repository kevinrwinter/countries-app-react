import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: JSON.parse(localStorage.getItem("favouritesData")) || [],

  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
    },
    removeFavourite: (state, action) => {
      return state.filter((country) => country?.name?.common !== action.payload.name?.common);
    },
  },
});

export const updateLocalStorage = (data) => {
  return async () => {
    localStorage.setItem("favouritesData", JSON.stringify(data));
  };
};

// export const clearFavorites = () => {
//   return async () => {
//     localStorage.setItem("favouritesData", JSON.stringify([]));
//     window.location.reload();
//   };
// };

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
