import reduxHelper from "../../utils/reduxHelper";
import {
  LOGIN
} from "./actionType";

const reduxUtil = reduxHelper("Main");

const initialState = {
  data: "",
};

// Crear el reducer segun la accion
const reducer = reduxUtil.createReducer(
  {
    [LOGIN]() {
      return initialState;
    }
  },
  initialState
);

export default reducer;
