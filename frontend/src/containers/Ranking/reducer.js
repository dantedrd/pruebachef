import reduxHelper from "../../utils/reduxHelper";
import {
  LOADING_OPEN,
  NEXT_RANKING,
  GET_RANKINGS,
  DESTROY,
  AFTER_RANKING
} from "./actionType";

const reduxUtil = reduxHelper("Ranking");

const initialState = {
  rankins: [],
  rankinOrder: [],
  index:0,
  loading: false
};

// Crear el reducer segun la accion
const reducer = reduxUtil.createReducer(
  {
    [LOADING_OPEN](state, action) {
      const newState = { ...state };
      newState.loading = action.payload.loading;
      return newState;
    },
    [GET_RANKINGS](state, action) {
      const newState = { ...state };
      if(action.payload.superHeroesOrderByLike.length===0){
        return newState;
      }
      newState.rankins = action.payload.superHeroesOrderByLike;
      newState.rankinOrder=[];
      for(let i=newState.index;i<(newState.index+2);i++){
        newState.rankinOrder.push(newState.rankins[i]);
      }
      newState.index=newState.index+2;
      return newState;
    },
    [AFTER_RANKING](state, action) {
      const newState = { ...state };
      newState.rankinOrder=[];
      newState.index=newState.index-2;
      for(let i=newState.index-1;i>=(newState.index-2);i--){
        newState.rankinOrder.push(newState.rankins[i]);
      }
      return newState;
    },
    [NEXT_RANKING](state, action) {
      const newState = { ...state };
      newState.rankinOrder=[];
      let limit=newState.index+2;
      if(limit>newState.rankins.length){
        limit=newState.rankins.length;
      }
      for(let i=newState.index;i<limit;i++){
        newState.rankinOrder.push(newState.rankins[i]);
      }
      newState.index=newState.index+2;
      return newState;
    },
    [DESTROY](state, action) {
      const newState = initialState;
      return newState;
    }
  },
  initialState
);

export default reducer;
