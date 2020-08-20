import React, { Component } from 'react'

import heart from '../../assets/images/icon/heart.svg'

import './style.css'

/*
interface Tweet {
    created_at: string;
    text: string;
    user: string;
}

interface TweetItemProps {
    tweet: Tweet;
}
*/ 

export default class Results extends Component {
    render () {
        return (
            <article className="tweet-item">
                <header>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/1125484112113033217/udasflgv_400x400.jpg" alt="Nome"/>
                        <strong>Carla Sousa</strong>
                        <span>•</span>
                        <span>14 de Agosto</span>
                    </div>
                </header>
                <p>
                    Este é um tweet
                </p>
            </article>
        )
    }
}

