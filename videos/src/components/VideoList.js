import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const video = props.videos.map((video) => {
        return <VideoItem video={video}/>
    })
    return(
        <div> 
            <h1>I have {props.videos.length} videos.</h1>
            {video}
        </div>
    )
}

export default VideoList;