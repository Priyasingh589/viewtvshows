import React , { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Gallery.css';

import {getVideoDetails , removeVideoDetails , getAllShows} from '../../actions';

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
          name :'',
          overview :'',
          id:''
        }
    }
    fetchTvShows(event) {
      this.setState({
          'activepage':event.target.value
      });
      this.props.getAllShows(event.target.value);
    }
    playVideo(id) {
      const tvshow = this.props.tvshowlist.results.filter(tvshow => tvshow.id === id);
      this.props.getVideoDetails(id);
      this.setState({
        name : tvshow[0].name,
        overview : tvshow[0].overview,
        id:tvshow[0].id
      });
    }
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.playVideo();
    }
    stopVideo(){
      this.props.removeVideoDetails();
    }
    render(){
      const opts = {
        width:'100%',
        height:'100%',
        playerVars: { 
          autoplay: 1,
          controls:0,
          showinfo:0
        }
      };
    return (
      <div className="gallery-container">
        {
          this.props.tvshowlist.results.map((tvshow, k) => {
            const showImg = `${this.props.configdetails.images.base_url}${this.props.configdetails.images.profile_sizes[2]}${tvshow.poster_path}`;
            return (
                <div className="gallery" key={tvshow.id}>
                <img
                  src={showImg}
                  className="gallery-img"
                  alt="gallery"
                />
                <div className="gallery-play" onClick={() => this.playVideo (tvshow.id)}>
                  <div className="gallery-play-inner">
                    <span>&#9654;</span>
                  </div>
                </div>
                <p className="gallery-text">
                  {tvshow.name}
                </p>
              </div>
            )
          }
        )}
        <div className="pagination">
          <span>Go to Page : </span>
        <select  onChange={(event) => this.fetchTvShows(event)}>
        {
            Array(this.props.tvshowlist.total_pages).fill().map((_,i)=>{
            return(
                <option value={i+1} key={i} >
                  {i+1}
                </option>
            );
          })
        }
        </select>
        </div>
      {
        this.props.videodetails !== undefined && Object.keys(this.props.videodetails).length !== 0 && this.props.videodetails.constructor === Object ?
        <div className = "video-container">
          <div className="popup">
            <div className = "tvshow-description">
              <div className="show-title">
                {this.state.name}
              </div>
              <div className = "show-overview">
                {this.state.overview}
              </div>
              <div className="btn-container">
                <Link to={`/details/${this.state.id}`}>
                  <button type="button" className="btn btn-primary">
                    <span className="glyphicon glyphicon-play"></span> Start Watching Now
                  </button>
                </Link>
                <button type="button" className="btn btn-success">
                  <span className="glyphicon glyphicon-heart"></span> Mark As Favorite
                </button>
              </div>
            </div>
            <div className = "tvshow-player">
              <YouTube
                videoId={this.props.videodetails.key}
                opts={opts}
                onReady={this._onReady}
              />
            </div>
          </div>
          <div className = "close-video"
          onClick = {()=>this.stopVideo()}
          ></div>
          <div className = "overlay"></div>
        </div>
        :<div></div>
      }
      </div>
      
    )}
}
function mapStateToProps(state) {
  const {videodetails} = state.tvshowdetails;
  return {videodetails}
}

export default connect(mapStateToProps,{getVideoDetails , removeVideoDetails , getAllShows})(Gallery);
