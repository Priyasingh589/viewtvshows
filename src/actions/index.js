import {GET_TVSHOW_LIST , GET_CONFIG , GET_GENRE_LIST , GET_VIDEO_DETAILS , REMOVE_VIDEO_DETAILS , GET_SHOW_DETAILS , GET_SHOW_SUBTITLES , GET_SHOW_CAST , GET_SHOW_SEASONS , BASE_URL , TV_DISCOVER_URL , CONFIG_URL , GENRE_URL , SHOW_DETAILS_URL , VIDEO_URL , SUBTITLES_URL , CAST_URL , SEASON_URL , API_KEY} from '../constants';

export function TvshowList(tvshowlist){
    const action = {
        type: GET_TVSHOW_LIST,
        tvshowlist
    }
    return action;
}

export function configDetails(configdetails){
    const action = {
        type: GET_CONFIG,
        configdetails
    }
    return action;
}

export function genreList(genrelist){
    const action = {
        type: GET_GENRE_LIST,
        genrelist
    }
    return action;
}

export function videoDetails(videodetails){
    const action = {
        type: GET_VIDEO_DETAILS,
        videodetails
    }
    return action;
}
export function removeVideoDetails(){
    const action = {
        type: REMOVE_VIDEO_DETAILS
    }
    return action;
}

export function getConfigDetails(){
        return (dispatch) => {    
            return new Promise((resolve,reject) => {
            const FETCH_URL = `${BASE_URL}${CONFIG_URL}?api_key=${API_KEY}`;   
            fetch(FETCH_URL, {
            method: 'GET'
            })
            .then(response => response.json())
            .then(json => {
                resolve(json); 
            });
          })
    }
    
}

export function getTvshowList(){
        return (dispatch) => {   
            return new Promise((resolve,reject) => {
            const FETCH_URL = `${BASE_URL}${TV_DISCOVER_URL}?api_key=${API_KEY}&page=1`;   
            fetch(FETCH_URL, {
            method: 'GET'
            })
            .then(response => response.json())
            .then(json => {
                resolve(json);  
            },
            error => {
                console.log("error",error);
            }
            );
          })
    }
    
}

export function getGenreList(){
        return (dispatch) => {
            return new Promise((resolve,reject) => { 
            const FETCH_URL = `${BASE_URL}${GENRE_URL}?api_key=${API_KEY}`;   
            fetch(FETCH_URL, {
            method: 'GET'
            })
            .then(response => response.json())
            .then(json => {
                resolve(json); 
            },
            error => {
                console.log("error",error);
            }
            );
          })
    }
    
}

export function getInitialData(){   
    return (dispatch) => {
        Promise.all([
            dispatch(getConfigDetails()),
            dispatch(getTvshowList()),
            dispatch(getGenreList())
        ])
        .then(response => {
            dispatch(configDetails(response[0]));  
            dispatch(TvshowList(response[1]));   
            dispatch(genreList(response[2])); 
        });
    }
}

export function getVideoDetails(tv_id){
    return (dispatch) => {
        const FETCH_URL = `${BASE_URL}tv/${tv_id}/${VIDEO_URL}?api_key=${API_KEY}`;   
        fetch(FETCH_URL, {
        method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(videoDetails(json)); 
        },
        error => {
            console.log("error",error);
        }
        );
    }
}
export function getShowInitialDetails(tv_id){   
    return (dispatch) => {
        Promise.all([
            dispatch(getShowDetails(tv_id)),
            dispatch(getShowSubtitles(tv_id)),
            dispatch(getShowCast(tv_id)),
            dispatch(getShowSeasons(tv_id , 1)),
            dispatch(getConfigDetails())
        ])
        .then(response => {
            dispatch(showDetails(response[0]));  
            dispatch(showSubtitles(response[1]));   
            dispatch(showCast(response[2]));   
            dispatch(showSeasons(response[3]));
            dispatch(configDetails(response[4]));
        });
    }
}

export function getShowDetails(tv_id){
    return (dispatch) => {   
        return new Promise((resolve,reject) => {
        const FETCH_URL = `${BASE_URL}${SHOW_DETAILS_URL}${tv_id}?api_key=${API_KEY}`;   
        fetch(FETCH_URL, {
        method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            resolve(json);  
        },
        error => {
            console.log("error",error);
        }
        );
      })
    }
}
export function getShowSubtitles(tv_id){
    return (dispatch) => {   
        return new Promise((resolve,reject) => {
        const FETCH_URL = `${BASE_URL}${SHOW_DETAILS_URL}${tv_id}${SUBTITLES_URL}?api_key=${API_KEY}`;   
        fetch(FETCH_URL, {
        method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            resolve(json);  
        },
        error => {
            console.log("error",error);
        }
        );
      })
    }
}
export function getShowCast(tv_id){
    return (dispatch) => {   
        return new Promise((resolve,reject) => {
        const FETCH_URL = `${BASE_URL}${SHOW_DETAILS_URL}${tv_id}${CAST_URL}?api_key=${API_KEY}`;   
        fetch(FETCH_URL, {
        method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            resolve(json);  
        },
        error => {
            console.log("error",error);
        }
        );
      })
    }
}
export function getShowSeasons(tv_id , season_id){
    return (dispatch) => {   
        return new Promise((resolve,reject) => {
        const FETCH_URL = `${BASE_URL}${SHOW_DETAILS_URL}${tv_id}${SEASON_URL}${season_id}?api_key=${API_KEY}`;   
        fetch(FETCH_URL, {
        method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            resolve(json);  
        },
        error => {
            console.log("error",error);
        }
        );
      })
    }
}

export function showDetails(tvshowinfo){
    const action = {
        type: GET_SHOW_DETAILS,
        tvshowinfo
    }
    return action;
}

export function showSubtitles(tvshowsubtitles){
    const action = {
        type: GET_SHOW_SUBTITLES,
        tvshowsubtitles
    }
    return action;
}

export function showCast(tvshowcast){
    const action = {
        type: GET_SHOW_CAST,
        tvshowcast
    }
    return action;
}

export function showSeasons(tvshowseasons){
    const action = {
        type: GET_SHOW_SEASONS,
        tvshowseasons
    }
    return action;
}
export function getAllEpisodes(tv_id,season_id){
    return (dispatch) => {
        const FETCH_URL = `${BASE_URL}${SHOW_DETAILS_URL}${tv_id}${SEASON_URL}${season_id}?api_key=${API_KEY}`;   
        fetch(FETCH_URL, {
        method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(showSeasons(json));
        },
        error => {
            console.log("error",error);
        }
        );
    }
}
export function getAllShows(pageno){
    return (dispatch) => {
        const FETCH_URL = `${BASE_URL}${TV_DISCOVER_URL}?api_key=${API_KEY}&page=${pageno}`;   
        fetch(FETCH_URL, {
        method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(TvshowList(json));
        },
        error => {
            console.log("error",error);
        }
        );
    }
}
