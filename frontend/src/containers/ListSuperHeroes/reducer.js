import reduxHelper from "../../utils/reduxHelper";
import {
  GET_BLOGS,
  TOTAL,
  LOADING_OPEN,
  LIKE_SUPER_HEROE,
  DISLIKE_SUPER_HEROE
} from "./actionType";

const reduxUtil = reduxHelper("ListSuperHeroes");

const initialState = {
  superHeroes: [],
  page: 0,
  total: 0,
  loading: false
};

// Crear el reducer segun la accion
const reducer = reduxUtil.createReducer(
  {
    [GET_BLOGS](state, action) {
      const newState = { ...state };
      newState.superHeroes = action.payload.superHeroes;
      newState.page = action.payload.page;
      return newState;
    },
    [TOTAL](state, action) {
      const newState = { ...state };
      newState.total = action.payload.total;
      return newState;
    },
    [LOADING_OPEN](state, action) {
      const newState = { ...state };
      newState.loading = action.payload.loading;
      return newState;
    },
    [LIKE_SUPER_HEROE](state, action) {
      const newState = { ...state };
      const superHereo = action.payload.superHeroe;
      var rankins = localStorage.rankins
        ? JSON.parse(localStorage.rankins)
        : {};
      if (rankins[superHereo.id]) {
        rankins[superHereo.id].like = rankins[superHereo.id].like + 1;
      } else {
        rankins[superHereo.id] = superHereo;
        rankins[superHereo.id].like = 1;
      }
      rankins[superHereo.id].dislike =
          rankins[superHereo.id].dislike &&
          rankins[superHereo.id].dislike.length > 0
            ? rankins[superHereo.id].dislike - 1
            : 0;
      localStorage.rankins = JSON.stringify(rankins);
      return newState;
    },
    [DISLIKE_SUPER_HEROE](state, action) {
      const newState = { ...state };
      const superHereo = action.payload.superHeroe;
      var rankins = localStorage.rankins
        ? JSON.parse(localStorage.rankins)
        : {};
      if (rankins[superHereo.id]) {
        rankins[superHereo.id].dislike = rankins[superHereo.id].dislike + 1;
      } else {
        rankins[superHereo.id] = superHereo;
        rankins[superHereo.id].dislike = 1;
      }
      rankins[superHereo.id].like =
        rankins[superHereo.id].like && rankins[superHereo.id].like > 0
          ? rankins[superHereo.id].like - 1
          : 0;
      localStorage.rankins = JSON.stringify(rankins);
      return newState;
    }
  },
  initialState
);

export default reducer;
