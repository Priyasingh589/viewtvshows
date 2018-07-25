import {GET_CONFIG} from '../constants';

export default(state = [] , action) => {
    switch(action.type){
        case GET_CONFIG :
            const {configdetails} = action;
            return configdetails;
        default:
            return state;
    }
}