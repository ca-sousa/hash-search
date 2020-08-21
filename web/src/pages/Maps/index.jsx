import * as React from "react";
import Header from "../../components/Header";
import HereMap from "../../components/HereMap";

import "./style.css";

export default class Maps extends React.Component {
  state = {
    user: {},
    error: null,
    authenticated: false,
  };

  _handleNotAuthenticated() {
    this.setState({ authenticated: false });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div id="page-map">
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <main>
          <div className="input-map">
            <form>
              <div className="input">
                <input
                  type="text"
                  id="hashtag"
                  placeholder="Busque a Hashtag"
                />
                <button type="submit">Buscar</button>
              </div>
            </form>
          </div>
          <HereMap />
        </main>
      </div>
    );
  }
}
