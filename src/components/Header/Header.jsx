import React , { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className = "tvshow-header">
                <div className = "header-icon">
                    <img 
                    alt = "logo"
                    src ="/images/logo_hooq.png" />
                </div>
                <div className = "main-heading">
                    {this.props.heading}
                </div>
            </div>    
        )
    }
}

export default Header;