import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showQuiz: false,
      showProducts: false,
    };
  }

  openQuiz = () => {
    this.setState({ showQuiz: !this.state.showQuiz });
  };

  openProducts = () => {
    this.setState({ showProducts: !this.state.showProducts });
  };

  render() {
    return (
      <div className="nav">
        <div className="navbar">
          <div className="navbarMargin">
            <div className="navItem quiz">
              <a className="subNavItem" onClick={this.openQuiz}>
                quiz
                <img
                  className="arrowDown"
                  alt=""
                  src="./images/arrowdown.png"
                ></img>
              </a>
              {this.state.showQuiz && (
                <div className="Toggle">
                  <div className="Box">
                    <div className="quizHair">
                      <div>
                        <img alt="quizImg" src="./images/comb.svg"></img>
                        <span>#1 rated custom hair care</span>
                      </div>
                      <a>take the hair quiz</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="navItem products">
              <a className="subNavItem" onClick={this.openProducts}>
                products
                <img
                  alt="navArrowDown"
                  className="arrowDown"
                  src="./images/arrowdown.png"
                ></img>
              </a>
              {this.state.showProducts && (
                <div className="Toggle">
                  <div className="Box">
                    <div className="productsHair">
                      <div className="hairCare">
                        <h1>HAIR CARE</h1>
                        <ul>
                          <li>shampoo + conditioner</li>
                          <li>purple shampoo</li>
                          <li>leave-inr</li>
                          <li>hair maskr</li>
                          <li>hair serum</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/Reviewpage" className="subNavItem">
              reviews
            </Link>
            <div>
              <Link to="/" className="subNavItem">
                <img
                  alt="navLogo"
                  className="navLogo"
                  src="./images/MainLogoNF.png"
                ></img>
              </Link>
            </div>
            <div className="navItem about">
              <Link to="/About" className="subNavItem" onClick={this.openAbout}>
                about
              </Link>
            </div>
            <Link to="/Login" className="subNavItem">
              account
            </Link>
            <Link to="/Cart" className="subNavItem">
              cart
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
