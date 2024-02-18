import React, { useContext } from "react";
import { isNotNullAndUndefined } from "../Helper/Helper";
import { VideoPlayerContext } from "../Provider/VideoPlayerProvider";

function VideoPlayer() {

    const videoPlayerContext = useContext(VideoPlayerContext)
    const selectedVideo = isNotNullAndUndefined(videoPlayerContext) ? videoPlayerContext.selectedVideo : null
    const selectedItemUID = isNotNullAndUndefined(selectedVideo) ? selectedVideo.itemID : null

    if (isNotNullAndUndefined(selectedVideo)) {
        return (
            <div className="video_player">
                <div>
                    <h2 className="fixed-header">{selectedVideo.name}</h2>
                </div>
                <video className="video_player_src" controls key={selectedItemUID}>
                    <source src={selectedVideo.videoURL} type="video/mp4" />
                </video>
            </div>
        );
    } else {
        return (
            <div>
                <h1>No Video</h1>
            </div>
        )
    }
}

export default React.memo(VideoPlayer);