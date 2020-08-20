import * as React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import HereMap  from '../../components/HereMap';

import './style.css'

export default class Maps extends React.Component {
    state = {
        user: {},
        error: null,
        authenticated: false
    };

     _handleNotAuthenticated() {
        this.setState({ authenticated: false });
        return false;
    };
    
    render () {
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
}
