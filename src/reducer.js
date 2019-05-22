import { ADD_CATEGORY, UPDATE_CATEGORY, UPDATE_IMAGE, DISPLAY_CATEGORY} from './actions'

let initialState = {
  currentImage: '',
  imageLoaded: true,
  displayedCategory: '',
  displayCount: 0,
  categories: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return Object.assign({}, state, {
          categories: [...state.categories, {
          name: action.name,
          images: [].concat(state.currentImage)
        }]
      });
    
    case DISPLAY_CATEGORY: 
      if(action.name === state.displayedCategory)
        return Object.assign({}, state, {
          redisplay: ++state.redisplay
        });
      return Object.assign({}, state, {
        displayedCategory: action.name
      });
    
    case UPDATE_CATEGORY: 
      let categories = state.categories
      categories[action.data.index].images.push(state.currentImage)
      return Object.assign({}, state, {
        categories: categories
      });
    
    case UPDATE_IMAGE:
      return Object.assign({}, state, {
        currentImage: action.image
      });
    
    default: 
      return state;
  }
}

export default rootReducer;
