import { LOADING_OPEN, GET_BLOGS,TOTAL,LIKE_SUPER_HEROE,DISLIKE_SUPER_HEROE } from "./actionType";
import reduxHelper from "../../utils/reduxHelper";

import SuperHeroApi from "../../remote/SuperHeroApi";

const reduxUtil = reduxHelper("ListSuperHeroes");
// Crear todas las acciones aquí
const actions = {
  getSuperHeroes: payload => (dispatch, getState, getFirebase) => {
    dispatch({
      type: LOADING_OPEN,
      payload: { loading: true }
    });
    getBlogs(dispatch,payload)
  },
  getTotal: payload => (dispatch, getState, getFirebase) => {
    dispatch({
      type: LOADING_OPEN,
      payload: { loading: true }
    });
    getTotal(dispatch,payload)
  },
  likeSuperHeroe: payload => (dispatch, getState, getFirebase) => {
    dispatch({
      type: LIKE_SUPER_HEROE,
      payload: { superHeroe: payload.superHeroe }
    });
  },
  dislikeSuperHeroe: payload => (dispatch, getState, getFirebase) => {
    dispatch({
      type: DISLIKE_SUPER_HEROE,
      payload: { superHeroe: payload.superHeroe }
    });
  }
};

const getBlogs=(dispatch,payload)=>{
  const page=payload.page?payload.page:0;
  SuperHeroApi.getSuperheroes({page}, (res, error) => {
    
    dispatch({
      type: LOADING_OPEN,
      payload: { loading: false }
    });
    dispatch({
      type: GET_BLOGS,
      payload: {
        superHeroes: res,
        page:page
      }
    });
  });
}

const getTotal=(dispatch)=>{
  SuperHeroApi.getTotalSuperheroes((res, error) => {
    
    dispatch({
      type: LOADING_OPEN,
      payload: { loading: false }
    });
    dispatch({
      type: TOTAL,
      payload: {
        total: res.total
      }
    });
  });
}

export default actions;
