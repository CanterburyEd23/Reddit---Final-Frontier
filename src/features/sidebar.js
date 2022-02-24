import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../app/subRedditSlice';
import { setSelectedSubreddit } from '../app/redditSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    
    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <div className='sidebar'>
            <h2>Subreddits</h2>
            <div className="subreddits-list">
                {subreddits.map((subreddit) => (                    
                    <button key={subreddit.id} 
                            className="subreddit"
                            type="button" 
                            onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                    >
                        <img
                            src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                            alt={`${subreddit.display_name}`}
                            className="subreddit-icon"
                            style={{ border: `3px solid ${subreddit.primary_color}` }}
                        />
                        {subreddit.display_name}
                    </button>                                       
                ))}
            </div>
        </div>
    );
};

export default Sidebar;