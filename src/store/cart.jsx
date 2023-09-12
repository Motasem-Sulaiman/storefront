import products from "./products";

let initialState = {
  products: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      if (!state.products.includes(payload)) {
        state.products.push(payload);
        return {
          products: [...state.products],
        };
      }
    case "REMOVE":
      let newList = state.products.filter((item) => item !== payload);
      return {
        products: newList,
      };
    default:
      return state;
  }
};

export const addItem = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};
export const removeItem = (item) => {
  return {
    type: "REMOVE",
    payload: item,
  };
};
