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
    componentsSize: 2,
    filterBudget: false,
    filterFavourites: false,
    filterSearch: '',
    filterTagsSearch: '',
    filterTags: [],
    sortOption: '',
    numberOfOffers: 0,
    currentPage: 1,
    postsPerPage: 10,
    profileCurrentPage: 1,
    profilePostsPerPage: 10,
  },
  offers: [],
  tags: []
};


export default initialState;
