import React from 'react';
import Header from '../../components/Header';
import Results from '../../components/Results';

import './style.css'
import SearchInput from '../../components/SearchInput';

function Search() {
    return (
        <div id='page-search'>
            <Header />
            <main>
                <SearchInput />
                <Results />
                <Results />
            </main>
        </div>
    );
}

export default Search;
