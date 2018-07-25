import React , { Component } from 'react';
import './ShowInfo.css';

class ShowInfo extends Component{
    render(){
        const urlImg = `${this.props.configdetails.images.base_url}${this.props.configdetails.images.profile_sizes[2]}${this.props.tvshowinfo.poster_path}`;
        return(
            <div className = "col-sm-2 showinfo-container">
                <div className = "poster-img">
                    <img
                    src={urlImg}
                    alt="poster"
                    />
                </div>
                <div className = "action-button-container">
                    <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-time" aria-hidden="true"></span> Watch Later
                    </button>
                </div>
                <div className = "action-button-container">
                    <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Favorite
                    </button>
                </div>
                <div className = "tvshow-name">
                    {this.props.tvshowinfo.name}
                </div>
                <div className = "tvshow-field-value">
                    <div className = "col-sm-4">
                        <div className = "tvshow-label">
                            Subtitles:
                        </div>
                    </div>
                    <div className = "col-sm-8">
                    <div className = "tvshow-value">
                        {
                            this.props.tvshowsubtitles.translations.map((subtitles, k) => {
                                return(
                                    this.props.tvshowsubtitles.translations.length-1 === k ?
                                    <span key={k}>{subtitles.name}</span>
                                    :<span key={k}>{subtitles.name}, </span>
                                );
                            })
                        }
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className = "tvshow-field-value">
                    <div className = "col-sm-4">
                        <div className = "tvshow-label">
                            Cast:
                        </div>
                    </div>
                    <div className = "col-sm-8">
                    <div className = "tvshow-value">
                        {
                            this.props.tvshowcast.cast.map((castname, k) => {
                                return(
                                    this.props.tvshowcast.cast.length-1 === k ?
                                    <span  key={k}>{castname.name}</span>
                                    :<span  key={k}>{castname.name}, </span>
                                );
                            })
                        }
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="show-desc">
                        {this.props.tvshowinfo.overview}
                </div>
                <div className = "genre-details">
                    {
                        this.props.tvshowinfo.genres.map((genrename, k) => {
                            return(
                                this.props.tvshowinfo.genres.length-1 === k ?
                                <span  key={k}>{genrename.name}</span>
                                :<span  key={k}>{genrename.name}, </span>
                            );
                        })
                    }
                </div>
            </div>    
        )
    }
}

export default ShowInfo;