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
    };
    
    render () {
        const { authenticated } = this.state;
        return (
            <div id='page-map'>
                <Header 
                    authenticated={authenticated}
                    handleNotAuthenticated={this._handleNotAuthenticated} 
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
