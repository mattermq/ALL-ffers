import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import axios from 'axios';

const axiosQ = axios.create({ withCredentials: true });

export const slice = createSlice({
  name: 'slice',
  initialState: initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    addOffers: (state, action) => {
      console.log('ACTION', action)
      state.offers = action.payload;
    },

  },
});
export const { increment, decrement, addOffers } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchOffersThunk = () => async dispatch => {
  console.log('fetch started');
  const response = await axiosQ('http://localhost:3003/offers/habr');
  console.log('Thunk', response.data.offers);
  dispatch(addOffers(response.data.offers));
};


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

console.log(slice)

export default slice.reducer;
