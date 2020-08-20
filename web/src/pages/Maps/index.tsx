import * as React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { HereMap } from '../../components/HereMap';

import './style.css'


function Maps() {
    function _handleNotAuthenticated(this: any) {
        this.setState({ authenticated: false });
    };
    
    return (
        <div id='page-map'>
            <Header 
                handleNotAuthenticated={_handleNotAuthenticated} 
            />
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
