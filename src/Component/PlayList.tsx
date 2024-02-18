import React, { useContext, useEffect } from "react";
import { functionforscroll, isNotEmptyArray, isNotNullAndUndefined } from "../Helper/Helper";
import { VideoPlayerContext } from "../Provider/VideoPlayerProvider";

function PlayList() {

    const playListItemId = "playlist_item_";
    const videoPlayerContext = useContext(VideoPlayerContext)
    const selectedVideo = isNotNullAndUndefined(videoPlayerContext) ? videoPlayerContext.selectedVideo : null
    const videoPlayList = isNotNullAndUndefined(videoPlayerContext) ? videoPlayerContext.videoPlayList : null
    const selectedItemUID = isNotNullAndUndefined(selectedVideo) ? selectedVideo.itemID : null


    useEffect(() => {
        const scroll = functionforscroll(`${playListItemId}${selectedItemUID}`);
        return () => {
            return scroll;
        }
    }, [selectedItemUID])


    const handleVideoChange = (video) => {
        videoPlayerContext.updateSelectedVideo(video)
    };

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('draggedItemIndex', index);
    };

    const handleDrop = (e, index) => {
        const draggedItemIndex = e.dataTransfer.getData('draggedItemIndex');
        const items = Array.from(videoPlayList);
        const [draggedItem] = items.splice(draggedItemIndex, 1);
        items.splice(index, 0, draggedItem);
        videoPlayerContext.updateVideoPlayList(items)
    };

    return (
        <div className="play_list">
            <h1 className="fixed-header">PlayList</h1>
            {isNotEmptyArray(videoPlayList) ?
                (
                    <div className="scrollable-content">
                        {videoPlayList.map((video, index) => {
                            return (
                                <div
                                    id={`${playListItemId}${video.itemID}`}
                                    key={video.itemID}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, index)}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => handleDrop(e, index)}
                                    onClick={() => handleVideoChange(video)}
                                    className={`card ${selectedItemUID === video.itemID ?
                                        'active_selected' :
                                        ''
                                        }`}
                                >
                                    <img className="card-img" src={video.imageURL} alt={video.name} />
                                    <p className="card-text">{video.name}</p>
                                </div>
                            )
                        })}
                    </div>
                ) :
                (
                    <div>
                        <h1>No Video to show</h1>
                    </div>
                )}
        </div>
    )
}

export default React.memo(PlayList);