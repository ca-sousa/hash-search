import React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { HereMap } from './here-map';

import './style.css'


function Maps() {
    return (
        <div id='page-map'>
            <Header />
            <main>
                <SearchInput />
                <HereMap/>
            </main>
        </div>
    );
}

export default Maps;
