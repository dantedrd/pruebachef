import { LOADING_OPEN, GET_SUPERHEROE } from "./actionType";
import reduxHelper from "../../utils/reduxHelper";

import SuperHeroApi from "../../remote/SuperHeroApi";

const reduxUtil = reduxHelper("SuperHeroe");
// Crear todas las acciones aquí
const actions = {
  getSuperHeroe: payload => (dispatch, getState, getFirebase) => {
    dispatch({
      type: LOADING_OPEN,
      payload: { loading: true }
    });
    getSuperHeroe(dispatch,payload)
  }
};

const getSuperHeroe=(dispatch,payload)=>{
  SuperHeroApi.getSuperHeroe(payload.id, (res, error) => {
    dispatch({
      type: LOADING_OPEN,
      payload: { loading: false }
    });
    dispatch({
      type: GET_SUPERHEROE,
      payload: {
        superHeroe: res
      }
    });
  });
}

export default actions;
