import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";
import { parseData } from "../utils";

// this defines the initial state of the app when our app begins running.
const initialState:InitialState ={
    videos:[],
    currentPlaying: null,
    searchTerm:'',
    searchResults: [],
    nextPageToken: null,
    recommendedVideos:[],
};

/* the  createSlice API helps us simp;lify our reducer logic,
* we no longer have to write our own action creators but rather it does that for us, it allows us to write our actions as functions in the reducers object
*/
const YoutubeSlice = createSlice({
    name: 'youtubeApp',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action) => {
            state.videos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken
        })
    },
    // extraReducers helps us to listen for action dispatches outside our slice. for instance, action dispatches in asyncThunks.
});   

// create the global state container
/* it builds the initial state from the reducers passed into it, many reducers can be passed into the reducer,
* the configureStore API will automatically combine the many reducers to form the root reducer */
export const store = configureStore({
    reducer: {
        youtubeApp: YoutubeSlice.reducer,
        // multiple reducers can be placed in here which will be automatically combined by the configureStore API to the root reducer.
    }
})

export type RootState = ReturnType<typeof store.getState>; //store.getState helps us get the current state of the app from the store 
export type AppDispatch = typeof store.dispatch; // store.dispatch allows us to dispatch actions to the store
