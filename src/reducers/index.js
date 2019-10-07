import { combineReducers } from "redux";

const selectedCategoryReducer = (category = "EDUCATION", action) => {
  if (action.type === "CATEGORY_SELECTED") {
    return action.payload;
  }
  return category;
};

export default combineReducers({
  selectedCategory: selectedCategoryReducer
});
