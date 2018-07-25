import React , { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import ShowInfo from './ShowInfo/ShowInfo';
import EpisodeInfo from './EpisodeInfo/EpisodeInfo';

import {getShowInitialDetails} from '../actions';

class ShowDetails extends Component{
    componentDidMount(){
        this.props.getShowInitialDetails(this.props.match.params.id);
    }
    render(){
        return(
            <div className = "App">
                <div>
                    <Header heading = ""/> 
                </div>
                <div className ="container-fluid">
                    {
                        this.props.configdetails !== undefined && this.props.configdetails.length !== 0 && this.props.tvshowinfo !== undefined && this.props.tvshowcast !== undefined && this.props.tvshowsubtitles !== undefined && this.props.tvshowseasons !== undefined  ?
                        <div className = "row content">
                            <div className = "col-sm-2"></div>
                            <ShowInfo  configdetails = {this.props.configdetails} tvshowinfo = {this.props.tvshowinfo} tvshowcast = {this.props.tvshowcast} tvshowsubtitles = {this.props.tvshowsubtitles}/>
                            <EpisodeInfo tvshowinfo = {this.props.tvshowinfo}  tvshowseasons = {this.props.tvshowseasons} />
                            <div className = "col-sm-2"></div>
                        </div>
                        :<div className = "row content"></div>
                    }            
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
        const {tvshowinfo , tvshowcast , tvshowseasons , tvshowsubtitles} = state.showcompletedetails;
        const {configdetails} = state;
        return{tvshowinfo , tvshowcast , tvshowseasons , tvshowsubtitles , configdetails}
}

export default connect(mapStateToProps,{getShowInitialDetails})(ShowDetails);