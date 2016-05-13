import Model from '../services/Model'

export const REQUEST_MODEL_QUERY = 'REQUEST_MODEL_QUERY';
export const requestModelQuery = function(filter) {
    return {
        type: REQUEST_MODEL_QUERY,
        filter: filter
    };
};

export const RECEIVE_MODEL_QUERY = 'RECEIVE_MODEL_QUERY';
export const receiveModelQuery = function(filter, result) {
    return {
        type: RECEIVE_MODEL_QUERY,
        filter,
        result
    };
};

export function executeQuery(filter) {
    return function(dispatch) {
        dispatch(requestModelQuery(filter));
        console.log(Model);
        Model.query(filter).then((items) => {
            dispatch(receiveModelQuery(filter, items));    
        });
    };
}
