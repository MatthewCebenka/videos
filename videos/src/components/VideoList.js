import React from 'react';


const VideoList = (props) => {
    return(
        <div> 
            <h1>I have {props.videos.length} videos.</h1>
            
        </div>
    )
}

export default VideoList;