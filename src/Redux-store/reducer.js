import { INC, DEC, RESET } from "./action";

const initialState = { count: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { ...state, count: state.count + 1 };
    case DEC:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
export default counterReducer;
