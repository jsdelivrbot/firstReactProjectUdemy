//get react and give me acces to this file import packages from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
//api key that allows to request  youtube from google developers console website then install package youtube-api-search on terminal
const API_KEY = 'AIzaSyBg0NBF1I7T3i4hBSkyBKpaIuw1XdBsahI';
//import components
import SearchBar from './components/search_bar';


//create a new component and this component should produce some html
//es6 javascript
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>);
}
//take this component and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));