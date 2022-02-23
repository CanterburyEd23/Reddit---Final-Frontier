import React from 'react';
import Avatar from './Avatar';

const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="comment">
            <div className="comment-metadata">
                <Avatar name={comment.author} />
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">                
                </p>
            </div>            
        </div>
    );
};

export default Comment;