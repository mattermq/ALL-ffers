// const state = {
//   isLoading: false,
//   offers: [{
//   }],
//   user: {
//     isAuth: false,
//     firstName: undefined,
//     lastName: undefined,
//     favourites: [],
//   },
//   view: {}
// }

const initialState = {
  isLoading: false,
  user: {
    isAuth: false,
    firstName: undefined,
    lastName: undefined,
    favourites: [],
  },
  view: {
    filterBudget: false,
    filterSearch: '',
    sortOption: '',
  },
  offers: [],
};


export default initialState;
