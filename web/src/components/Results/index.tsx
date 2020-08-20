import React from 'react'

import heart from '../../assets/images/icon/heart.svg'

import './style.css'

export interface Tweet {
    created_at: string;
    text: string;
    user: string;
}

interface TweetItemProps {
    tweet: Tweet;
}

const Results: React.FC<TweetItemProps> = ({ tweet }) => {
    return(
        <article className="tweet-item">
            <header>
                <div>
                    <strong>{tweet.user}</strong>
                    <span>{tweet.created_at}</span>
                </div>
            </header>
            <p>
                {tweet.text}
            </p>
            <footer>  
                <button type='button'>
                  <img src={heart} alt="Adicionar a Coleção"/> Adicione a sua Coleção
                </button>
            </footer>
        </article>
    );
}

export default Results;
