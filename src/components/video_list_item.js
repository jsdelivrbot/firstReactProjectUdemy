import React from 'react';

//const VideoListItem = ({video})->es6 refactoring

const VideoListItem = ({ video, onVideoSelect }) => {

    //check it on console> network

    const imageUrl = video.snippet.thumbnails.default.url;
    const titleVideo = video.snippet.title;

    //create click event on li to select the video

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">{titleVideo}</div>
            </div>
        </li>
    );
};

export default VideoListItem;