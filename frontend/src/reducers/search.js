import {
  UPDATE_SEARCH,
  HOME_PAGE_LOADED,
  CHANGE_TAB
} from "../constants/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
    case CHANGE_TAB:
      return ""
    case UPDATE_SEARCH:
      return action.value
    default:
      return state;
  }
};

export default reducer;
