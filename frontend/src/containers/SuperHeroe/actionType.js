/*
* Archivos para definer las constantes para  Main
*
* Versión 1.0
* Fecha de creación 2018-01-03
* Creado por admin
*/
import reduxHelper from '../../utils/reduxHelper';

const reduxUtil = reduxHelper('SuperHeroe');

export const GET_SUPERHEROE = reduxUtil.defineAction('GET_SUPERHEROE');
export const LOADING_OPEN = reduxUtil.defineAction('LOADING_OPEN');
