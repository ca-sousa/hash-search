import React, { useState, FormEvent } from 'react';
import Header from '../../components/Header';
import Results from '../../components/Results';

import './style.css'
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';
import Landing from '../Landing';

function Search() {
    //Login
    function _handleNotAuthenticated(this: any) {
        this.setState({ authenticated: false });
    };

    const state = {
        user: {},
        error: null,
        authenticated: false
    };

    function componentDidMount(this: any) {
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
    
    //Dados da API
    const [tweetShare, setTweetShare] = useState(''); //do campo de pesquisa

    const [tweets, setTweet] = useState([]); //tweet de resposta da api

    async function searchTweets(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('', {
            params: {
                tweetShare
            }
        })

        setTweet(response.data);
    }

    return (
        <div id='page-search'>
            <Landing
                authenticated={state.authenticated}
            />
            <Header 
                handleNotAuthenticated={_handleNotAuthenticated}
            />
            <main>
                <form onSubmit={searchTweets}>
                <SearchInput />
                </form>
                <button type="submit">Pesquisar</button>    
                <SearchInput />
            </main>
        </div>
    );
}

export default Search;
