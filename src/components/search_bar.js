import React, { Component } from 'react';

//defining new class called searchBar and give it acces to all of the functionality that react.component(added to import to refactor code) has.
//needs to return GSX-->render()
//every class contains render method
class SearchBar extends Component {
    constructor(props) {
        //here we define the state -->super : calls the parent method on the parent class.
        super(props);
        this.state = { term: '' };
    }
    render() {
        //add event handler using es6
        return <input onChange={event => console.log(event.target.value)} />;
    }
}


export default SearchBar;