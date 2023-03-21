export interface InitialState {
    videos: HomePageVideos[];
    currentPlaying: CurrentPlaying | null; // this is the typescript combine types: currentPlaying can either be a currentPlaying or take the null value.
    searchTerm: string;
    searchResults: [];
    nextPageToken: string | null; // this is the typescript combine types: nextPageToken can either be a string or take the null value.
    recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {
    videoId : string;
    videoTitle :string;
    videoDescription : string;
    videoLink : string;
    videoDuration : string;
    videoThumbnail : string;
    videoViews : string;
    videoAge : string;
    channelInfo : {
        id: string;
        image : string;
        name : string
    }
}
export interface CurrentPlaying {}
export interface RecommendedVideos {}