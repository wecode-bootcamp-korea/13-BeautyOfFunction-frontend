import React, { Component } from "react";
import "./About.scss";
class About extends Component {
  constructor() {
    super();
    this.state = {
      showQuiz: false,
      showProducts: false,
      showAbout: false,
    };
  }

  openQuiz = () => {
    if (this.state.showQuiz === true) {
      this.setState({ showQuiz: false });
    }
    if (this.state.showQuiz === false) {
      this.setState({ showQuiz: true });
    }
  };

  openProducts = () => {
    if (this.state.showProducts === true) {
      this.setState({ showProducts: false });
    }
    if (this.state.showProducts === false) {
      this.setState({ showProducts: true });
    }
  };

  openAbout = () => {
    if (this.state.showAbout === true) {
      this.setState({ showAbout: false });
    }
    if (this.state.showAbout === false) {
      this.setState({ showAbout: true });
    }
  };

  render() {
    return (
      <>
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
              <a className="subNavItem">reviews</a>
              <div>
                <a className="subNavItem">
                  <img
                    alt="navLogo"
                    className="navLogo"
                    src="./images/MainLogoAbout.png"
                  ></img>
                </a>
              </div>
              <div className="navItem about">
                <a className="subNavItem" onClick={this.openAbout}>
                  about
                  <img
                    alt="navArrowDown"
                    className="arrowDown"
                    src="./images/arrowdown.png"
                  ></img>
                </a>
                {this.state.showAbout && (
                  <div className="Toggle">
                    <div className="Box">
                      <div className="productsHair">
                        <div className="hairCare">
                          <ul>
                            <li>our story</li>
                            <li>ingredients</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a className="subNavItem">account</a>
              <a className="subNavItem">cart</a>
            </div>
          </div>
        </div>

        <main>
          <div className="mainSection">
            <div className="mainSectionInner">
              <div className="mainContent">
                <div className="wePic">
                  <img alt="wePic" src="/images/iOS이미지.jpg"></img>
                </div>
                <div className="mainRight">
                  <h1>hi, we're</h1>
                  <h1 className="lastText">function of beauty.</h1>
                  <div className="bottomText">
                    <p>
                      the world leader in customizable beauty – hair, skin, and
                      body care products made for you (and only you).
                    </p>
                  </div>
                  <a>TAKE THE HAIR QUIZ</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default About;
