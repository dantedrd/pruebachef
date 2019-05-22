import React from "react";
import { connect } from "react-redux";
import actions from "./actions";

import { Link } from "react-router-dom";

import "./style.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

@connect(
  state => ({
    ...state.Header
  }),
  actions
)
export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { openLogin: false, openRegister: false };
  }
  render() {
    return (
      <nav class="fadeInDown">
        <div class="brand_image">
          <p>SuperHeroes</p>
        </div>
        <div class="nav_options">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link to={`/rankin`}>Ranking</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
