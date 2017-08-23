import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    //iterating over videos array with map and pass it on ul ad an ID on the list 

    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
        />
    });
    return (

        //use className for defining class on styling

        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;