/*
* Archivos para definer las constantes para  Main
*
* Versión 1.0
* Fecha de creación 2018-01-03
* Creado por admin
*/
import reduxHelper from '../../utils/reduxHelper';

const reduxUtil = reduxHelper('ListSuperHeroes');

export const GET_BLOGS = reduxUtil.defineAction('GET_BLOGS');
export const LOADING_OPEN = reduxUtil.defineAction('LOADING_OPEN');
export const LIKE_SUPER_HEROE = reduxUtil.defineAction('LIKE_SUPER_HEROE');
export const DISLIKE_SUPER_HEROE = reduxUtil.defineAction('DISLIKE_SUPER_HEROE');
export const TOTAL = reduxUtil.defineAction('TOTAL');
