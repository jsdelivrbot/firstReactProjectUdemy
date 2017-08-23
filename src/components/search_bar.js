import React, { Component } from 'react';

//defining new class called searchBar and give it acces to all of the functionality that react.component(added to import to refactor code) has.
//needs to return GSX-->render()
//every class contains render method

class SearchBar extends Component {
    constructor(props) {

        //here we define the state -->super : calls the parent method on the parent class.
        //set initial state

        super(props);
        this.state = { term: '' };
    }
    render() {

        //add event handler using es6
        //set a new state when it renders the class
        //value from input is called a controlled component, it has its value set by state and chenges only when state changes

        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />

            </div>
        );
    }
}


export default SearchBar;