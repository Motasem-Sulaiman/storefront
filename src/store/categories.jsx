let initialState = {
  categories: [
    {
      displayName: "New Games",
      normalizedName: "Games",
      description: "Games Description Goes Here",
    },
    {
      displayName: "Food Recipes",
      normalizedName: "Food",
      description: "Food Description Goes Here",
    },
  ],
  activeCategory: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PICK":
      let newCategory = state.categories.map((categ) => {
        if (categ.normalizedName === payload) {
          return {
            displayName: categ.displayName,
            normalizedName: categ.normalizedName,
            description: categ.description,
          };
        } else {
          return categ;
        }
      });
      return {
        categories: newCategory,
        activeCategory: payload
    }
    default:
      return state;
  }
};

export const category = (name) => {
  return {
    type: "PICK",
    payload: name,
  };
};

