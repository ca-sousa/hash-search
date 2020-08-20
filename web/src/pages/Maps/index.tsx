import * as React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { HereMap } from '../../components/HereMap';

import './style.css'


function Maps() {
    const state = {
        user: {},
        error: null,
        authenticated: false
    };

    function _handleNotAuthenticated(this: any) {
        this.setState({ authenticated: false });
        return false;
    };
    
    return (
        <div id='page-map'>
            <Header 
                authenticated={state.authenticated}
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
