let initialState = {
  products: [
    // {
    //   categoryAssociation: "Games",
    //   name: "SMASH BROS",
    //   description: "SMASH BROS Description.....",
    //   price: "$1200",
    //   inventoryCount: 500,
    // },
    // {
    //   categoryAssociation: "Games",
    //   name: "Monopoly",
    //   description: "Monopoly Description......",
    //   price: "$1000",
    //   inventoryCount: 820,
    // },
    // {
    //   categoryAssociation: "Food",
    //   name: "Cookies",
    //   description: "Cookies Description......",
    //   price: "$2.38",
    //   inventoryCount: 998,
    // },
    // {
    //   categoryAssociation: "Food",
    //   name: "Pizza",
    //   description: "Pizza Description.......",
    //   price: "$1.99",
    //   inventoryCount: 703,
    // },
    // {
    //   categoryAssociation: "Food",
    //   name: "Banana",
    //   description: "Banana Description...... ",
    //   price: "$0.99",
    //   inventoryCount: 534,
    // },
  ],
  // activeCategory: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      let newCount = state.products.map((product) => {
        if (product.name === payload.name) {
          return {
            ...product,
            count: product.count - 1,
          };
        } else {
          return product;
        }
      });
      return {
        products: newCount,
      };
    case "REMOVE": {
      let newCount = state.products.map((product) => {
        if (product.name === payload.name) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      });
      return {
        products: newCount,
      };
    }
    case "GET":
      console.log(state.products)
            return{
              products:payload
            }
    default:
      return state;
  }
};

// export const product = (name) => {
//   return {
//     type: "FILTER",
//     payload: name,
//   };
// };

// export const addItem = (item) => {
//   return {
//     type: "ADD",
//     payload: item,
//   };
// };
