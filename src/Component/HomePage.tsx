import React from "react";
import VideoPlayerProvider from "../Provider/VideoPlayerProvider";
import PlayList from "./PlayList";
import VideoPlayer from "./VideoPlayer";

function HomePage() {
    return (
        <div className="home_page">
            <VideoPlayerProvider>
                <VideoPlayer />
                <PlayList />
            </VideoPlayerProvider>
        </div>
    )
}

export default React.memo(HomePage);