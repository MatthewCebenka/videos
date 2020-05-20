import React from 'react';

const VideoItem = (props) => {
    const title = props.video.snippet.title;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default VideoItem;