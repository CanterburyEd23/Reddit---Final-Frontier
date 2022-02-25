import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts, selectFilteredPosts, setSearchTerm } from '../app/redditSlice';

const RedditContent = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(fetchPosts(selectedSubreddit)); 
    }, [selectedSubreddit, dispatch]);

    if (isLoading) {
        return (
            <div className="loading">
                <p>Loading...</p>
            </div>            
        );
    };

    if (error) {
        return (
            <div className="error">
                <h2>Failed to load posts.</h2>
                <button
                    type="button"
                    onClick={() => dispatch(fetchPosts(selectedSubreddit))}
                    className="redditContentButton"
                >
                Try again
                </button>
            </div>
        );
    };

    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching "{searchTerm}"</h2>
                <button type="button"
                        onClick={() => dispatch(setSearchTerm(''))}
                        className="redditContentButton"
                >
                    Go home
                </button>
            </div>
        );
    };

    return (
        <div className="redditContent">
            <h2>RedditContent</h2>
            {posts.map((post, index) => (
                <Post key={post.id} post={post}></Post>
            ))}
        </div>
    );
};

export default RedditContent;