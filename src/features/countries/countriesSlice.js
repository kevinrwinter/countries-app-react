import { createSlice } from "@reduxjs/toolkit";
// import countryService from "../../services/countries";

import getAll from "../../services/countries";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: true,
    search: "",
  },
  reducers: {
    getCountries: (state, action) => {
      state.countries = action.payload;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

// const [countries, setCountries] = useState([]);
// const [isLoading, setIsLoading] = useState(true);
// const [search, setSearch] = useState('');

// Middleware getting data for useEffect
export const initializeCountries = () => {
  return async (dispatch) => {
    // const countries = await countryService.getAll();
    const countries = await getAll();

    dispatch(getCountries(countries));
    dispatch(isLoading(false));
  };
};

// Actions
export const { getCountries, isLoading, search } = countriesSlice.actions;

// Store
export default countriesSlice.reducer;
