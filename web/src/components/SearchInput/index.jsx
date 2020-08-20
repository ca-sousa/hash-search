import React, { Component } from 'react';

import './style.css'

export default class SearchInput extends Component {
    render () {
        return (
            <form>
                <div className="input">
                    <input type='text' id="hashtag" placeholder="Busque a Hashtag"/>
                </div>
            </form>
        )
    }
}   
