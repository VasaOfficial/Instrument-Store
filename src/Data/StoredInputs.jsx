/* eslint-disable default-param-last */
// Initial state
const initialState = {
  items: [],
};

// Reducer function to handle the ADD_TO_CART action
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}

export default cartReducer;
