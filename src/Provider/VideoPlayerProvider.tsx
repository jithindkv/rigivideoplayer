import React, { Reducer, useEffect, useReducer } from "react";
import { DefaultVideoPlayList, StorageKey, VideoPlayListRow } from "../Helper/Constants";
import { getLocalStorage, isNotEmptyArray, isNotNullAndUndefined, setLocalStorage } from "../Helper/Helper";

export const VideoPlayerContext = React.createContext({
    selectedVideo: null as VideoPlayListRow,
    videoPlayList: null as VideoPlayListRow[],
    updateSelectedVideo: null as (selectedVideo: VideoPlayListRow) => void,
    updateVideoPlayList: null as (videoPlayList: VideoPlayListRow[]) => void
});

interface IState {
    selectedVideo: VideoPlayListRow;
    videoPlayList: VideoPlayListRow[];
}

function VideoPlayerProvider({ children }) {

    const [state, setState] = useReducer<Reducer<IState, Partial<IState>>>(
        (state, newState) => ({ ...state, ...newState }),
        {
            selectedVideo: null,
            videoPlayList: null
        }
    );

    useEffect(() => {
        refresh()
    }, [])

    const refresh = () => {
        setState({ selectedVideo: null, videoPlayList: null });
        const storageSelectedVideo = getLocalStorage(StorageKey.SelectedVideo);
        const storageVideoPlayList = getLocalStorage(StorageKey.videoPlayList);

        if (isNotNullAndUndefined(storageSelectedVideo) && isNotEmptyArray(storageVideoPlayList)) {
            setState({ selectedVideo: JSON.parse(storageSelectedVideo), videoPlayList: JSON.parse(storageVideoPlayList) });
        } else {
            const selectedVideo: VideoPlayListRow = DefaultVideoPlayList[0];

            const videoPlayList: VideoPlayListRow[] = DefaultVideoPlayList

            setLocalStorage(StorageKey.SelectedVideo, JSON.stringify(selectedVideo));
            setLocalStorage(StorageKey.videoPlayList, JSON.stringify(videoPlayList));

            setState({ selectedVideo, videoPlayList });
        }

        const selectedVideo: VideoPlayListRow = isNotNullAndUndefined(storageSelectedVideo) ?
            JSON.parse(storageSelectedVideo) : DefaultVideoPlayList[0];

        const videoPlayList: VideoPlayListRow[] = isNotEmptyArray(storageVideoPlayList) ?
            JSON.parse(storageVideoPlayList) : DefaultVideoPlayList

        setLocalStorage(StorageKey.SelectedVideo, JSON.stringify(selectedVideo));
        setLocalStorage(StorageKey.videoPlayList, JSON.stringify(videoPlayList));

        setState({ selectedVideo, videoPlayList });
    }

    const updateSelectedVideo = (selectedVideo: VideoPlayListRow) => {
        setState({ selectedVideo });
        setLocalStorage(StorageKey.SelectedVideo, JSON.stringify(selectedVideo));
    }

    const updateVideoPlayList = (videoPlayList: VideoPlayListRow[]) => {
        setState({ videoPlayList });
        setLocalStorage(StorageKey.videoPlayList, JSON.stringify(videoPlayList));
    }

    if (isNotEmptyArray(state.videoPlayList)) {
        return (
            <VideoPlayerContext.Provider
                value={{
                    selectedVideo: state.selectedVideo,
                    videoPlayList: state.videoPlayList,
                    updateSelectedVideo: updateSelectedVideo,
                    updateVideoPlayList: updateVideoPlayList,
                }}
            >
                {children}
            </VideoPlayerContext.Provider>
        )
    } else {
        return null
    }
}

export default React.memo(VideoPlayerProvider);