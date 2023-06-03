import React from 'react';
import './Tweet.css';

const Tweet = ({ user, content, date}) => {
    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="tweet-username">{user}</span>
                <span className="tweet-timestamp">{date}</span>
            </div>
            <div className="tweet-message">{content}</div>
            <div className="tweet-buttons">
                <button className="tweet-button">Like</button>
                <button className="tweet-button">Reply</button>
            </div>

        </div>
    );
};

export default Tweet;
