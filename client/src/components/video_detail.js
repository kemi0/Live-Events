import React from 'react';

const VideoDetail = ({ videos }) => {
    console.log(videos);
    const videoId = videos[0].id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
    <div className="container-fluid">
        <div className="row youtube-container">
            <div className="col-xs-12">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="detials">   
                    <div>{videos[0].snippet.title}</div>
                    <div>{videos[0].snippet.description}</div>
                </div>
            </div>
        </div>
    </div>
    ) 

}
export default VideoDetail;