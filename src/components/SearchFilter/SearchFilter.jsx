import React , { Component } from 'react';
import Multiselect from 'react-bootstrap-multiselect';
import './SearchFilter.css';

class SearchFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            "genre":[]
        }
    }
    handleChange(){
        console.log("inside handel change");
    }
    UNSAFE_componentWillMount(){
        let genreoptions = [];
        this.props.genrelist.genres.map((genre,k)=>{
            genreoptions.push({
                'value':genre.id,
                'label':genre.name
            });
        });
        this.setState({
            'genre':genreoptions
        });
    }
    render(){
        return(
            <div className = "search-section">
                <Multiselect 
                data={this.state.genre}
                onChange = {this.handleChange()}
                multiple/>
            </div>    
        )
    }
}

export default SearchFilter;