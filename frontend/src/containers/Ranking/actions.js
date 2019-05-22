import {
  LOADING_OPEN,
  GET_RANKINGS,
  NEXT_RANKING,
  DESTROY,
  AFTER_RANKING
} from "./actionType";
import reduxHelper from "../../utils/reduxHelper";

import SuperHeroApi from "../../remote/SuperHeroApi";

const reduxUtil = reduxHelper("Ranking");
// Crear todas las acciones aquí
const actions = {
  getRankinSuperHeroes: payload => (dispatch, getState, getFirebase) => {
    getSuperHeroes(dispatch, payload);
  },
  nextRanking: payload => (dispatch, getState, getFirebase) => {
    dispatch({
      type: NEXT_RANKING
    });
  },
  afterRanking: payload => (dispatch, getState, getFirebase) => {
    dispatch({
      type: AFTER_RANKING
    });
  },
  destroy: payload => (dispatch, getState, getFirebase) => {
    dispatch({
      type: DESTROY
    });
  },
};

const getSuperHeroes = (dispatch, payload) => {
  const rankins = localStorage.rankins ? JSON.parse(localStorage.rankins) : {};
  const rankisArr = Object.keys(rankins).map(key => {
    if(rankins[key].like>0){
      return rankins[key];
    }
  });
  const superHeroesOrderByLike=orderSuperHeroes(rankisArr);

  dispatch({
    type: GET_RANKINGS,
    payload: { superHeroesOrderByLike }
  });
};

const orderSuperHeroes=(rankins)=>{
  rankins=rankins.sort(function(a, b) {return  b.like-a.like});
  return rankins.splice(0,10);
}

export default actions;
