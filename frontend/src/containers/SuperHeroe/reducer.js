import reduxHelper from "../../utils/reduxHelper";
import {
  GET_SUPERHEROE,
  LOADING_OPEN
} from "./actionType";

const reduxUtil = reduxHelper("ListSuperHeroes");

const initialState = {
  superHeroe: {},
  loading:false
};

// Crear el reducer segun la accion
const reducer = reduxUtil.createReducer(
  {
    [GET_SUPERHEROE](state, action) {
      const newState = { ...state };
      newState.superHeroe=action.payload.superHeroe;
      return newState;
    },
    [LOADING_OPEN](state, action) {
      const newState = { ...state };
      newState.loading=action.payload.loading;
      return newState;
    }
  },
  initialState
);

export default reducer;
