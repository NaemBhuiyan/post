import { ADD_CATEGORY } from "../actionTypes";
const s = {
  catagories: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ],
};
const catagoriesReducer = (state = s, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { catagories: [...state.catagories, action.id] };

    default:
      return state;
  }
};

export default catagoriesReducer;
