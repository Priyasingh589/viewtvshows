import React , { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import SearchFilter from './SearchFilter/SearchFilter';
import Gallery from './Gallery/Gallery';

import {getInitialData} from '../actions';

class App extends Component{
    componentDidMount(){
        this.props.getInitialData();
    }
    render(){
        return(
            <div className = "App">
                <Header heading = "TV SHOW DETAILS"/>
                {/*
                this.props.tvshowdetails.genrelist !== undefined ?
                <SearchFilter genrelist = {this.props.tvshowdetails.genrelist}/>
                :<div></div>
                */}
                {
                this.props.tvshowdetails.tvshowlist !== undefined ?
                <Gallery 
                        tvshowlist = {this.props.tvshowdetails.tvshowlist} 
                        configdetails = {this.props.configdetails}
                />
                :<div></div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
        const {configdetails , tvshowdetails} = state;
        return {configdetails , tvshowdetails}
}

export default connect(mapStateToProps,{getInitialData})(App);