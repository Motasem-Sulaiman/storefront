let initialState = {
  products: [
    {
      categoryAssociation: "Games",
      name: "SMASH BROS",
      description: "SMASH BROS Description.....",
      price: "$1200",
      inventoryCount: "500",
    },
    {
      categoryAssociation: "Games",
      name: "Monopoly",
      description: "Monopoly Description......",
      price: "$1000",
      inventoryCount: "820",
    },
    {
      categoryAssociation: "Food",
      name: "Cookies",
      description: "Cookies Description......",
      price: "$2.38",
      inventoryCount: "998",
    },
    {
      categoryAssociation: "Food",
      name: "Pizza",
      description: "Pizza Description.......",
      price: "$1.99",
      inventoryCount: "703",
    },
    {
      categoryAssociation: "Food",
      name: "Banana",
      description: "Banana Description...... ",
      price: "$0.99",
      inventoryCount: "534",
    },
  ],
  // activeCategory: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FILTER":
      let filteredProducts = state.products.filter(
        (item) => item.categoryAssociation === payload
      );

      return {
        products: filteredProducts,
      };
    default:
      return state;
  }
};

export const products = (name) => {
  return {
    type: "FILTER",
    payload: name,
  };
};
