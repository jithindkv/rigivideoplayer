import React, { useContext, useEffect, useRef } from "react";
import { StorageKey } from "../Helper/Constants";
import { getLocalStorage, isNotNullAndUndefined, removeLocalStorage, setLocalStorage } from "../Helper/Helper";
import { VideoPlayerContext } from "../Provider/VideoPlayerProvider";

function VideoPlayer() {

    const videoRef = useRef(null);

    const videoPlayerContext = useContext(VideoPlayerContext)
    const selectedVideo = isNotNullAndUndefined(videoPlayerContext) ? videoPlayerContext.selectedVideo : null
    const selectedItemUID = isNotNullAndUndefined(selectedVideo) ? selectedVideo.itemID : null


    useEffect(() => {
        if (isNotNullAndUndefined(videoRef) && isNotNullAndUndefined(videoRef.current) && isNotNullAndUndefined(selectedItemUID)) {


            const storedTime = getLocalStorage(StorageKey.videoPlaTimeUpdate)
            const videoPlaTimeUpdate = JSON.parse(storedTime);

            if (isNotNullAndUndefined(videoPlaTimeUpdate) && videoPlaTimeUpdate.itemID === selectedItemUID) {
                if (storedTime) {
                    videoRef.current.currentTime = parseFloat(videoPlaTimeUpdate.timeupdate);
                }
            } else {
                removeLocalStorage(StorageKey.videoPlaTimeUpdate)
            }

            const savePlaybackTime = () => {
                const currentTime = videoRef.current.currentTime
                const vieoPlaTimeUpdate = {
                    itemID: selectedItemUID,
                    timeupdate: currentTime
                }
                setLocalStorage(StorageKey.videoPlaTimeUpdate, JSON.stringify(vieoPlaTimeUpdate))
            };

            videoRef.current.addEventListener("timeupdate", savePlaybackTime);

            return () => {
                videoRef.current.removeEventListener("timeupdate", savePlaybackTime);
            };
        }
    }, [selectedItemUID]);

    if (isNotNullAndUndefined(selectedVideo)) {
        return (
            <div className="video_player">
                <div>
                    <h2 className="fixed-header">{selectedVideo.name}</h2>
                </div>
                <video
                    ref={videoRef}
                    className="video_player_src"
                    controls key={selectedItemUID}
                >
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