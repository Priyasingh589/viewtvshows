import React , { Component } from 'react';
import './EpisodeInfo.css';
import { connect } from 'react-redux';

import {getAllEpisodes} from '../../actions';

class EpisodeInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            'activeseason':1
        }
    }
    fetchEpisodes(showid,season) {
        this.setState({
            'activeseason':season
        });
        this.props.getAllEpisodes(showid,season);
    }
    render(){
        return(
            <div className = "col-sm-6 episode-container">
                <div className = "tvshow-name">
                    {this.props.tvshowinfo.name}
                </div>
                <div className = "episode-count">
                    {
                        this.props.tvshowinfo.number_of_seasons > 0 ?
                        <span>{this.props.tvshowinfo.number_of_seasons} Seasons, </span>
                        :<span></span>
                    }
                     {
                         this.props.tvshowinfo.number_of_episodes > 0 ?
                         <span>{this.props.tvshowinfo.number_of_episodes} Episodes</span>
                         :<span></span>
                     }
                </div>
                <div className = "episode-details">
                     <div className = "episode-heading">
                        EPISODES
                     </div>
                     <div className = "season-sequence"> 
                        <span className = "season-heading">
                        Seasons : 
                        </span>
                        {
                            Array(this.props.tvshowinfo.number_of_seasons).fill().map((_,i)=>{
                            return(
                                <a className={this.state.activeseason == i+1 ? "season-values active-season" :"season-values"} key={i}  onClick={() => this.fetchEpisodes(this.props.tvshowinfo.id,i+1)}>
                                {i+1}</a>
                            );
                        })
                        }
                     </div>
                     <div className = "episode-sequence-container">
                        {
                            this.props.tvshowseasons.episodes.map((episode, k) => {
                                return(
                                    <div className="episode-sequence" key = {episode.id}>
                                        <span className="sequence">{k+1}.</span>
                                        <span className="episode-name">{episode.name}</span>
                                        <span className="play-episode">
                                            &#9654;
                                        </span>
                                    </div>
                                );
                            })
                        }
                     </div>
                </div>
            </div>      
        )
    }
}
function mapStateToProps(state) {
    const {tvshowseasons} = state.showcompletedetails;;
    return {tvshowseasons}
  }
  
export default connect(mapStateToProps,{getAllEpisodes})(EpisodeInfo);