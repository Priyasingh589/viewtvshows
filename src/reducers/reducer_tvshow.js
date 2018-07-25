import {GET_TVSHOW_LIST , GET_GENRE_LIST , GET_VIDEO_DETAILS , REMOVE_VIDEO_DETAILS} from '../constants';

const filterTrailerVideo = (videolist) => {
    let video = videolist.filter(video => video.type === "Trailer");
    return video.length !== 0 ? video[0] : videolist[0];
}

export default(state = [] , action) => {
    switch(action.type){
        case GET_TVSHOW_LIST :
            const {tvshowlist} = action;
            return {...state, tvshowlist};
        case GET_GENRE_LIST :
            const {genrelist} = action;
            return {...state, genrelist};
        case GET_VIDEO_DETAILS :
            let videodetails = filterTrailerVideo(action.videodetails.results);
            return {...state, videodetails};
        case REMOVE_VIDEO_DETAILS :
             videodetails = {};
            return {...state, videodetails};
        default:
            return state;
    }
}