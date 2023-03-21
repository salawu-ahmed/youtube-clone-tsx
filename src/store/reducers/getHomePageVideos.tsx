import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { parseData } from "../../utils";
import { HomePageVideos } from "../../Types";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

// the createAsyncThunk helps us to write asynchronous code such as fetching data from an external API
// it takes two parameters: 
// a string which is used as a prefix for the action types automatically generated
// a thunk function which is used to write action creators
export const getHomePageVideos = createAsyncThunk(
    'youtubeApp/homePageVideos' ,
     async (isNext:boolean, { getState }) => {
        const {
            youtubeApp: { nextPageToken: nextPageTokenFromState, videos }
        } = getState() as RootState;
        const {data: { items, nextPageToken }} = await axios.get(`${YOUTUBE_API_URL}/search?maxResults=20&q='reactsjs projects'&key=${API_KEY}&part=snippet&type=video`)
        const parsedData : HomePageVideos[] = await parseData(items)
        return {parsedData: [...videos, ...parsedData], nextPageToken }
      }
      
    )