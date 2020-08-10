import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import axios from 'axios';

const axiosQ = axios.create({ withCredentials: true });

export const slice = createSlice({
  name: 'slice',
  initialState: initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    loginAC: (state, action) => {
      const { firstName, lastName, _id, favourites } = action.payload
      state.user.isAuth = true
      state.user.firstName = firstName
      state.user.lastName = lastName
      state.user._id = _id
      state.user.favourites = favourites
      state.offers = state.offers.map(offer => {
        if (favourites.includes(offer._id))
          return { ...offer, isFavourite: true }
        else return offer
      });
    },

    changeComponentSizeAC: (state, action) => {
      state.view.componentsSize = Number(action.payload)
    },

    expandCardAC: (state, action) => {
      state.offers = state.offers.map(offer => {
        if (offer._id === action.payload)
          return { ...offer, hasExpandedSize: true }
        else
          return { ...offer, hasExpandedSize: false }
      })
    },

    closeExpandedAC: (state) => {
      state.offers = state.offers.map(offer => {
        return { ...offer, hasExpandedSize: false }
      })
    },

    toggleFilterBudgetAC: state => {
      state.view.filterBudget = !state.view.filterBudget;
    },

    toggleFilterFavouritesAC: state => {
      state.view.filterFavourites = !state.view.filterFavourites;
    },

    filterSearchHandlerAC: (state, action) => {
      state.view.filterSearch = action.payload;
    },

    changeSortOptionAC: (state, action) => {
      state.view.sortOption = action.payload;
    },

    setCurrentPageAC: (state, action) => {
      state.view.currentPage = action.payload
    },

    addOffers: (state, action) => {
      state.offers = action.payload.map(offer => { return { ...offer, isFavourite: false, hasExpandedSize: false } })
    },

    toggleFavouriteAC: (state, action) => {
      state.offers = state.offers.map(offer => {
        if (offer._id === action.payload)
          return { ...offer, isFavourite: !offer.isFavourite }
        else return offer
      })

      if (state.user.favourites.includes(action.payload))
        state.user.favourites = state.user.favourites.filter(el => el !== action.payload)
      else
        state.user.favourites.push(action.payload)
    }
  },
});

export const {
  loginAC,
  addOffers,
  changeComponentSizeAC,
  expandCardAC,
  closeExpandedAC,
  toggleFilterBudgetAC,
  toggleFilterFavouritesAC,
  filterSearchHandlerAC,
  changeSortOptionAC,
  setCurrentPageAC,
  toggleFavouriteAC,

} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchOffersThunk = () => async dispatch => {
  const response = await axiosQ('http://localhost:3003/offers/habr');
  dispatch(addOffers(response.data.offers));
};

export const updateUserOnServerThunk = (payload) => async dispatch => {
  const response = await axiosQ.patch('http://localhost:3003/users/', payload)
  console.log(response.data)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default slice.reducer;
