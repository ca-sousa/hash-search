import React, { Component } from 'react';

import Header from '../../components/Header';
import Results from '../../components/Results';

import './style.css'

export default class Search extends Component {
    state = {
      user: {},
      error: null,
      authenticated: false
    };

    _handleNotAuthenticated = () => {
        this.setState({ authenticated: false });
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
            throw new Error("Failed to authenticate user");
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
      const { authenticated } = this.state;
      return (
        <div id='page-search'>
            <Header 
                authenticated={authenticated}
                handleNotAuthenticated={this._handleNotAuthenticated}
            />
            <main>
                <h3>Pesquise a Hashtag que deseja no campo abaixo</h3>
                <form>
                  <div className="input">
                      <input type='text' id="hashtag" placeholder="Busque a Hashtag"/>
                      <button type='submit'>Buscar</button>
                  </div>
                </form>
                <Results />
            </main>
            
        </div>
      )
    }
}