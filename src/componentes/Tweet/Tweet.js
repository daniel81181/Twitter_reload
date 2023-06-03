
import './Tweet.css';
import React, { Suspense, useEffect, useState } from "react"


const Tweet = ({ user, content, date,retweets}) => {
    const rt = Object.entries(retweets);


    const [showTextArea, setShowTextArea] = useState(false);
    const [textValue, setTextValue] = useState('');

    const handleButtonClick = () => {
        setShowTextArea(true);
    };

    const handleTextAreaChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleSaveClick = () => {
        // Handle saving the textarea value or perform any other action
        console.log(textValue);
        setShowTextArea(false);
    };

    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="tweet-username">{user}</span>
                <span className="tweet-timestamp">{date}</span>
            </div>
            <div className="tweet-message">{content}</div>
            <div className="tweet-buttons">
                <button className="tweet-button">Like</button>
                <div>
                    {!showTextArea && (
                        <button className="tweet-button" onClick={handleButtonClick}>Reply</button>
                    )}

                    {showTextArea && (
                        <div>
          <textarea
              value={textValue}
              onChange={handleTextAreaChange}
              placeholder="Enter your text here..."
          />
                            <button onClick={handleSaveClick}>Save</button>
                        </div>
                    )}
                </div>

            </div>
            <div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <div style={{ alignItems: 'center'}} >
                            <span className="tweet-username">{retweets.user}</span>
                            <span className="tweet-timestamp">{retweets.date}</span>
                            <br/>
                        </div>
                        <br/>
                        <div className="tweet-message">{retweets.content}</div>

                    </div>

            </div>







        </div>
    );
};

export default Tweet;
