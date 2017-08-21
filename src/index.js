//get react and give me acces to this file import packages from node_modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//api key that allows to request  youtube from google developers console website then install package youtube-api-search on terminal, remember to activate API and refresh key on your google account
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAB6OIH28TKD5cybjVgu96e2i9EzuJFl_c';
//import components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


class App extends Component {
    constructor(props) {
        super(props);
        //list of videos
        this.state = { videos: [] };
        //create and object for youtube search, second argument with a function that respons data(callback function)
        YTSearch({ key: API_KEY, term: 'overwatch' }, (videoData) => {
            this.setState({ videos: videoData });
        });

    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
    //passing data(prop called videos) from parent component to child component
}
//take this component and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));