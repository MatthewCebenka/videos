import React from 'react';

const VideoItem = (props) => {
    const title = props.video.snippet.title;
    const image = props.video.snippet.thumbnails.medium.url;
    return (
        <div>
            <h1>{title}</h1>
            <img src={image}/>
        </div>
    )
}

export default VideoItem;