import React, { useState } from 'react';
import shortenNumber from '../utils/shortenNumber';

const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const { post } = props;

    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };

    return (
        <article key={post.id}>
            <div className="post-wrapper">
                {/* Up and Downvote buttons, and upvote total. */}
                <div className="post-votes-container">                                       
                    <button
                        type="button"
                        className='downvote'
                        onClick={() => onHandleVote(-1)}
                        aria-label="Down vote"
                    >
                        &lt;
                    </button>
                    <p></p>
                    <p>{shortenNumber(post.ups, 1)}</p>
                    <button
                        type="button"
                        className='upvote'
                        onClick={() => onHandleVote(1)}
                        aria-label="Up vote"
                    >
                        &gt;
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