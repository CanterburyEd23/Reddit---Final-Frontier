import { createSlice } from '@reduxjs/toolkit';

const subRedditSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [ "Astronomy", "spaceporn", "NebulaPorn", "StarshipPorn" ],
        error: false,
        isLoading: false,
    },        
});

export default subRedditSlice.reducer;
export const { startGetSubreddits, getSubredditsSuccess, getSubredditsFailed } = subRedditSlice.actions;

export const selectSubreddits = (state) => state.subreddits.subreddits;  //simple selector