/*
* Archivos para definer las constantes para  Main
*
* Versión 1.0
* Fecha de creación 2018-01-03
* Creado por admin
*/
import reduxHelper from '../../utils/reduxHelper';

const reduxUtil = reduxHelper('Ranking');

export const GET_RANKINGS = reduxUtil.defineAction('GET_RANKINGS');
export const NEXT_RANKING = reduxUtil.defineAction('NEXT_RANKING');
export const LOADING_OPEN = reduxUtil.defineAction('LOADING_OPEN');
export const DESTROY = reduxUtil.defineAction('DESTROY');
export const AFTER_RANKING = reduxUtil.defineAction('AFTER_RANKING');


