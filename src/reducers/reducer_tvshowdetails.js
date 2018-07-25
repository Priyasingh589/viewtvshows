import {GET_SHOW_DETAILS , GET_SHOW_SUBTITLES , GET_SHOW_CAST , GET_SHOW_SEASONS} from '../constants';


export default(state = [] , action) => {
    switch(action.type){
        case GET_SHOW_DETAILS :
            const {tvshowinfo} = action;
            return {...state, tvshowinfo};
        case GET_SHOW_SUBTITLES :
            const {tvshowsubtitles} = action;
            return {...state, tvshowsubtitles};
        case GET_SHOW_CAST :
            const {tvshowcast} = action;
            return {...state, tvshowcast}; 
        case GET_SHOW_SEASONS :
            const {tvshowseasons} = action;
            return {...state, tvshowseasons}; 
        default:
            return state;
    }
}