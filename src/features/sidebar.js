import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../app/subRedditSlice';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../app/redditSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <div className='sidebar'>
            <h2>Subreddits</h2>
            <ul className="subreddits-list">
                {subreddits.map((subreddit) => (
                    <li key={subreddit.id}>
                        <button type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
                            <img
                                src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                                alt={`${subreddit.display_name}`}
                                className="subreddit-icon"
                                style={{ border: `3px solid ${subreddit.primary_color}` }}
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;