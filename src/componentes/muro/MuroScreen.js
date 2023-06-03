import React, { Suspense, useEffect, useState } from "react";

import { db } from "../../firebase";
import { onValue,ref, set,push} from "firebase/database";
import './InputTweet.css'
import {Dashboard} from '../Dashboard/Dashboard'

import Tweet from "../Tweet/Tweet";

export const MuroScreen= () => {
    const [tweets, setTweets,setRetweets] = useState([]);

    useEffect(() => {
        const query = ref(db, "tweets");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            console.log(data);

            if (snapshot.exists()) {
                Object.values(data).map((tweet) => {
                    setTweets((tweets) => [...tweets, tweet]);
                    console.log(tweet)

                });
            }
        });
    }, []);

    const [message, setMessage] = useState('');
    const handleInputChange = (event) => {
        if (event.target.value.length<=300){
            setMessage(event.target.value);
        }

    };


        const Push = (message) => {

            const query = push(ref(db, "tweets"),{
                user: '@daniel8181',
                date: new Date().toLocaleDateString(),
                content: message,
                retweets:{
                    user: '',
                    date: '',
                    content: '',
                }
            });
          console.log(query)
        }





    const handleTweet = () => {
        if (message.trim() !== '') {
            Push(message);
            setMessage('');
        }
    };





    return (
        <div>
            <div className="input-tweet">
                      <textarea
                          className="input-tweet-message"
                          placeholder="Compose your tweet..."
                          value={message}
                          onChange={handleInputChange}
                          maxLength={300}
                      ></textarea>
                <p>Character Count: {message.length}/300</p> {/* Display character count */}
                     <button className="input-tweet-button" onClick={handleTweet}>
                        Tweet
                     </button>
            </div>
            <Dashboard/>

            <div>

            </div>


            <div>
                {tweets.map((tweet, index) => (
                    <Tweet {...tweet} key={index} />


                ))}
            </div>

        </div>


    );
}

export default MuroScreen;

