import { SET_USER } from "./constants";

export const initState = {
  user: "",
};
function reducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
}
export default reducer;
