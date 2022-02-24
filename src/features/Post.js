import React, { useState } from 'react';
import shortenNumber from '../utils/shortenNumber';

const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const { post } = props;

    /**
    * @param {number} newValue The new vote value
    */
    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };

    const renderUpVote = () => {
        if (voteValue === 1) {
            return <button className="icon-action" />;
        }
        return <button className="icon-action" />;
    };

    const renderDownVote = () => {
        if (voteValue === -1) {
            return <button className="icon-action" />;
        }
        return <button className="icon-action" />;
    };

    const getVoteType = () => {
        if (voteValue === 1) {
            return 'up-vote';
        }
        if (voteValue === -1) {
            return 'down-vote';
        }

        return '';
    };

    return (
        <article key={post.id}>
            <div className="post-wrapper">
                {/* Up and Downvote buttons, and upvote total. */}
                <div className="post-votes-container">
                    <button
                        type="button"
                        onClick={() => onHandleVote(1)}
                        aria-label="Up vote"
                    >
                        {renderUpVote()}
                    </button>
                    <p>{shortenNumber(post.ups, 1)}</p>
                    <button
                        type="button"
                        onClick={() => onHandleVote(-1)}
                        aria-label="Down vote"
                    >
                        {renderDownVote()}
                    </button>
                </div>
                
                {/* Actual Post content */}
                <div className="post-container">
                    <h3 className="post-title">{post.title}</h3>
                    <div className="post-image-container">
                        <img src={post.url} alt="" className="post-image" />
                    </div>
                    <div className="post-details">
                        <span className="author-username">{post.author}</span>                        
                    </div>                    
                </div>

            </div>
        </article>
    );
};

export default Post;