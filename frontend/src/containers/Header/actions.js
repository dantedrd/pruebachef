import {LOGIN } from "./actionType";
import reduxHelper from "../../utils/reduxHelper";

const reduxUtil = reduxHelper("Header");
// Crear todas las acciones aquí
const actions = {
  login: payload =>
    reduxUtil.createAction(LOGIN)(payload)
};

export default actions;
