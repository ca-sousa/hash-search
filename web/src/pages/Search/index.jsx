import React, { Component } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import TweetItem from "../../components/SearchItem";

import "./style.css";

export default class Search extends Component {
  //Login
  state = {
    user: {},
    error: null,
    authenticated: false,
  };

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };

  componentDidMount = () => {
    fetch("http://localhost:3333/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("Failed to authenticate user");
      })
      .then((responseJson) => {
        this.setState({
          authenticated: true,
          user: responseJson.user,
        });
      })
      .catch((error) => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  };

  //Pesquisa
  constructor(props) {
    super(props);
    this.state = {
      q: [],
      tweets: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ q: event.target.value });
  }

  handleSearch(event) {
    const param = this.state.q;
    api
      .get("/auth/search?q=", { param })
      .then((response) => {
        console.log(response);
        this.setState({ tweets: response.data });
      })
      .catch((e) => {
        console.log(e);
      });

    event.preventDefault();
  }

  render() {
    console.log(this.state.tweets);
    const { authenticated } = this.state;
    return (
      <div id="page-search">
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <main>
          <h3>Pesquise a Hashtag que deseja no campo abaixo</h3>
          <form onSubmit={this.handleSearch}>
            <div className="input">
              <input
                type="text"
                id="hashtag"
                placeholder="Busque a Hashtag"
                value={this.state.q}
                onChange={this.handleChange}
              />
              <button type="submit">Buscar</button>
            </div>
          </form>
          {this.state.tweets.map((tweet) => (
            <TweetItem
              photo={tweet.photo}
              user={tweet.user}
              created_at={tweet.created_at}
              text={tweet.text}
            />
          ))}
        </main>
      </div>
    );
  }
}
