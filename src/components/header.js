import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/landing" className="navbar-brand">
            Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse  float-right" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/posts" className="nav-link">
                  Posts <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addpost" className="nav-link">
                  Add Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shows" className="nav-link">
                  Tv Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/comments" className="nav-link">
                  Comments
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/info" className="nav-link">
                  Info
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
