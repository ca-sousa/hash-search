import React from 'react';
import Header from '../../components/Header';

import './style.css'

function SearchInput() {
    return (
        <form>
            <div className="input">
                <input type='text' id="hashtag" placeholder="Busque a Hashtag"/>
            </div>
        </form>
    );
}   

export default SearchInput;