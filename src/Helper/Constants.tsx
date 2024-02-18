export class VideoPlayListRow {
    itemID: number;
    name: string;
    videoURL: string;
    imageURL: string;
}

export class StorageKey {
    static SelectedVideo = 'selectedVideo';
    static videoPlayList = 'videoPlayList';
}

export const DefaultVideoPlayList = [
    {
        itemID: 0,
        name: "Big Buck Bunny",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
    },
    {
        itemID: 1,
        name: "Elephants Dream",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
    },
    {
        itemID: 2,
        name: "For Bigger Blazes",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg"
    },
    {
        itemID: 3,
        name: "For Bigger Escapes",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
    },
    {
        itemID: 4,
        name: "For Bigger Fun",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
    },
    {
        itemID: 5,
        name: "For Bigger Joyrides",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
    },
    {
        itemID: 6,
        name: "For Bigger Meltdowns",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg"
    },
    {
        itemID: 7,
        name: "Subaru Outback On Street And Dirt",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
    },
    {
        itemID: 8,
        name: "Tears Of Steel",
        videoURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        imageURL: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
    }
]