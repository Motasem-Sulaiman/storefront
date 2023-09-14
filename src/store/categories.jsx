let initialState = {
  categories: [
    {
      displayName: "New Games",
      normalizedName: "GAMES",
      description: "Games Description Goes Here",
    },
    {
      displayName: "Food Recipes",
      normalizedName: "FOOD",
      description: "Food Description Goes Here",
    },
    {
      displayName: "WEAPONS",
      normalizedName: "WEAPONS",
      description: "WEAPONS Description Goes Here",
    },
    {
      displayName: "New ELECTRONICS ",
      normalizedName: "ELECTRONICS",
      description: "ELECTRONICS Description Goes Here",
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



