import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits } from '../app/subRedditSlice';
import { setSelectedSubreddit } from '../app/redditSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    

    const handleClick = (event) => {
        dispatch(setSelectedSubreddit(`/r/${event}/`));        
    };

    return (
        <div className='sidebar'>
            <h2>Subreddits</h2>
            <div className="subreddits-list">
                {subreddits.map((subreddit) => (                    
                    <button className="subreddit"
                            type="button" 
                            onClick={handleClick}                                
                    >                        
                        {subreddit}
                    </button>                                       
                ))}
            </div>
        </div>
    );
};

export default Sidebar;