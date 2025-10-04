import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recentSearches: JSON.parse(localStorage.getItem("recentSearches")) || [] // fetching the items from local storage 
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchTerm: (state, action) => {
      const term = action.payload.trim(); // remove the extra space 
      if (!term) return;

      // we use the filter method to remove duplicate items if there is  exists
      state.recentSearches = state.recentSearches.filter(t => t.toLowerCase() !== term.toLowerCase());

      // Add to beginning of array because recent search at first 
      state.recentSearches.unshift(term);

      // remove the item from array we need only 5 searches 
      state.recentSearches = state.recentSearches.slice(0, 5);

      // Save recent searches to localStorage
      localStorage.setItem("recentSearches", JSON.stringify(state.recentSearches));
    }
  }
});

export const { addSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
