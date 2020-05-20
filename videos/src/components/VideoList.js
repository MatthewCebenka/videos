import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    return(
        <div> 
            <h1>I have {props.videos.length} videos.</h1>
            <VideoItem />
        </div>
    )
}

export default VideoList;