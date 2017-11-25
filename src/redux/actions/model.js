import getData from './utils/get-data';

export default (model, uuid = null) => (dispatch, getState) => getData(dispatch, getState, model, uuid ? { uuid } : {});
