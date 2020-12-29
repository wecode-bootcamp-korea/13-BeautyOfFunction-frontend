import React, { Component } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./About.scss";
import "aos/dist/aos.css";

class About extends Component {
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

  componentDidMount() {
    AOS.init({
      duration: 800,
      delay: 400,
    });
  }

  render() {
    return (
      <>
        <div className="aboutNav">
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
                <Link to="MainPage" className="subNavItem">
                  <img
                    alt="navLogo"
                    className="navLogo"
                    src="./images/MainLogoNF.png"
                  ></img>
                </Link>
              </div>
              <div className="navItem about">
                <a className="subNavItem">about</a>
              </div>
              <Link to="/Mypage" className="subNavItem">
                account
              </Link>
              <Link to="Cart" className="subNavItem">
                cart
              </Link>
            </div>
          </div>
        </div>

        <main>
          <div className="mainSection">
            <div className="mainSectionInner">
              <div className="mainContent">
                <div className="wePic">
                  <img
                    alt="wePic"
                    src="/images/timPicGif.gif"
                    data-aos="zoom-in"
                  ></img>
                </div>
                <div className="mainRight">
                  <h1>Hi, We're</h1>
                  <h1 className="lastText">beauty of function.</h1>
                  <div className="bottomText">
                    <p>
                      Front-End : 이지영, 김정현, 김보경, 임수현
                      <br />
                      Back- End : 허소정(PM), 김예진
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mainImgDiv">
            <div className="mainImgInner">
              <div className="imgThree">
                <img
                  alt="timPic3"
                  src="/images/timPic3.jpg"
                  data-aos="fade-right"
                ></img>
                <img
                  alt="timPic2"
                  src="/images/timPic2.jpg"
                  data-aos="flip-down"
                ></img>
                <img
                  alt="timPic1"
                  src="/images/timPic1.jpg"
                  data-aos="fade-left"
                ></img>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default About;
