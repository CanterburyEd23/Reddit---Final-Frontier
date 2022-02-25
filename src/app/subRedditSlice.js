import { createSlice } from '@reduxjs/toolkit';

const subRedditSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [ 
            {name: "Astronomy"},
            {name: "NASA_News"},
            {name: "spaceporn"},
            {name: "NebulaPorn"},
            {name: "StarshipPorn"},
            {name: "startrekmemes"},
            {name: "scifi"},
            {name: "SciFiArt"},
        ],
        error: false,
        isLoading: false,
    },        
});

export default subRedditSlice.reducer;
export const { startGetSubreddits, getSubredditsSuccess, getSubredditsFailed } = subRedditSlice.actions;

export const selectSubreddits = (state) => state.subreddits.subreddits;  //simple selector