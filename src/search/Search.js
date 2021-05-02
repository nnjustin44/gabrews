import React, {Component} from "react";
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    handleChange = (event) => {
        
    }
    
    handleBlur = (event) => {
        
    }
    
    handleKeyDown = (event) => {
        let characters = ['e', '-', '+', '=', '*', '/'];
        if (characters.includes(event.key)) {
            event.preventDefault();
        }
    }
    
    render() {
        return(
            <div>
                <input type="number" 
                       onChange={this.handleChange} 
                       onKeyDown={this.handleKeyDown} 
                       onBlur={this.handleBlur} 
                />
                <SearchIcon />
            </div>
        );
        
    }

}

export default Search;
