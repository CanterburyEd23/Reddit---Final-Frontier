import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const subRedditSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [],
        error: false,
        isLoading: false,
    },
    reducers: {
        startGetSubreddits(state) {  //Here we see actions created for the three possible states of our Async API request - pending, success, and failure.  This one is pending.
            state.isLoading = true;
            state.error = false;
        },
        getSubredditsSuccess(state, action) { //This one looks like a normal reducer, as this is what runs on the promise's success - the promise having returned data (action.payload) for us to use.
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubredditsFailed(state) {  //This one sets the error state to true, as our api request has failed, and error handling now needs to take place.
            state.isLoading = false;
            state.error = true;
        },
    },    
});

export default subRedditSlice.reducer;
export const { startGetSubreddits, getSubredditsSuccess, getSubredditsFailed } = subRedditSlice.actions;

//  This is a Redux Thunk that gets subreddits.
export const fetchSubreddits = () => async (dispatch) => {  //when we call fetchSubreddits, the following happens:
    try {
        dispatch(startGetSubreddits());  //We dispatch the startGetSubreddits action to the store.  This sets the "isLoading" property to "true", and "error" to false.
        const subreddits = await getSubreddits();  //We teach our thunk that the variable "subreddits" = the result of calling "getSubreddits", and set it to await the response.  This will either be a success, or failure.
        dispatch(getSubredditsSuccess(subreddits));  //It works, and we dispatch the getSubredditsSuccess action to the store, with a payload of "subreddits", as returned to us in the above line.
    } catch (error) {  //In the event the above doesn't work, we "catch" an error.    
        dispatch(getSubredditsFailed());  //We dispatch the "getSubredditsFailed" action to the store, which will set the "error" state to "true".
    };
};

export const selectSubreddits = (state) => state.subreddits.subreddits;  //simple selector