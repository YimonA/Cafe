export const reducer = (state, action) => {
  switch (action.type) {
    
    case "GET_COFFEE":
      return { ...state, products: action.payLoad };
    default:
      return state;
  }
};
