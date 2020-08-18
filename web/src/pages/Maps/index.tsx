import React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { HereMap } from '../../components/HereMap';

import './style.css'


function Maps() {
    return (
        <div id='page-map'>
            <Header />
            <main>
                <div className="input-map">
                    <SearchInput />
                </div>
                <HereMap/>
            </main>
        </div>
    );
}

export default Maps;
