import {RECEIVE_MODEL_QUERY} from '../../actions';

function getInitialState() {
    return {
        items: {},
        search: {}
    };
}

export default function(state = getInitialState(), action) {
    switch (action.type) {
        case RECEIVE_MODEL_QUERY:
            const result = Object.assign({}, state);
            console.log(Object.assign({}, state));
            if(!result.items[action.filter.module]) {
                result.items[action.filter.module] = {}
            }
            if(!result.items[action.filter.module][action.filter.entity]) {
                result.items[action.filter.module][action.filter.entity] = {};
            }
            action.result.forEach((item) => {
                result.items[action.filter.module][action.filter.entity][item.id] = item;
            });
            if(!result.search[action.filter.hashCode()]) {
                result.search[action.filter.hashCode()] = [];    
            }
            const ids = action.result.map((item) => {
               return item.id; 
            });
            result.search[action.filter.hashCode()].push({filter: action.filter, ids: ids});
            return result;
        default:
            return state
    }
}

