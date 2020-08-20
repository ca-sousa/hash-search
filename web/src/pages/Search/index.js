import React, { Component } from 'react';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import Landing from '../Landing';

import './style.css'

export default class Search extends Component {
    //Login
    state = {
      user: {},
      error: null,
      authenticated: false
    };

    _handleNotAuthenticated() {
        this.setState({ authenticated: false });
        return false
    };

    componentDidMount() {
        fetch("http://localhost:3333/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        })
          .then(response => {
            if (response.status === 200) return response.json();
            throw new Error("failed to authenticate user");
          })
          .then(responseJson => {
            this.setState({
              authenticated: true,
              user: responseJson.user
            });
          })
          .catch(error => {
            this.setState({
              authenticated: false,
              error: "Failed to authenticate user"
            });
        });
    }

    render() {
      return (
        <div id='page-search'>
            <Landing
                authenticated={state.authenticated}
            />
            <Header 
                authenticated={state.authenticated}
                handleNotAuthenticated={_handleNotAuthenticated}
            />
            <main>
              <form>
                <SearchInput />
                <button type="submit">Pesquisar</button>    
              </form>
            </main>
        </div>
      )
    }
}

export default Search;
