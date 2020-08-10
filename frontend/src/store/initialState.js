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
  user: {
    isAuth: false,
    _id: undefined,
    firstName: undefined,
    lastName: undefined,
    favourites: [],
  },
  view: {
    isLoading: false,
    componentsSize: 1,
    filterBudget: false,
    filterFavourites: false,
    filterSearch: '',
    sortOption: '',
    currentPage: 1,
    postsPerPage: 10,
  },
  offers: [],
  tags: []
};


export default initialState;
