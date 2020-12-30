import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { YJ_URL } from "../../config";
import Slider from "react-slick";
import AOS from "aos";
import Hairlist from "./Hairlist";
import MainFirst from "./MainFirst";
import MainSecond from "./MainSecond";
import MainThree from "./MainThree";
import MainFour from "./MainFour";
import MainFive from "./MainFive";
import MainSix from "./MainSix";
import MainFooter from "./MainFooter";
import "./Mainpage.scss";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Mainpage extends Component {
  constructor() {
    super();
    this.state = {
      showQuiz: false,
      showProducts: false,
      listData: [],
    };
  }

  componentDidMount() {
    fetch(`${YJ_URL}/products`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ listData: res.product_list });
      });

    AOS.init({
      duration: 1200,
      delay: 400,
    });
  }

  openQuiz = () => {
    this.setState({ showQuiz: !this.state.showQuiz });
  };

  openProducts = () => {
    this.setState({ showProducts: !this.state.showProducts });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: (
        <div>
          <img
            alt="rightArrow"
            className="next-slick-arrow"
            src="./images/right-arrow.svg"
          ></img>
        </div>
      ),
      prevArrow: (
        <div>
          <img
            alt="leftArrow"
            className="prev-slick-arrow"
            src="./images/left-arrow.svg"
          ></img>
        </div>
      ),
      className: "slides",
    };

    return (
      <>
        <nav>
          <div className="navbar">
            <div className="navbarMargin">
              <div className="navItem quiz">
                <a href="# " className="subNavItem" onClick={this.openQuiz}>
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
                        <Link to="/Quiz">take the hair quiz</Link>
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
                          {this.state.listData.map((list) => (
                            <ul>
                              <li
                                onClick={() =>
                                  this.props.history.push(
                                    `/detail${list.category_id}`
                                  )
                                }
                              >
                                {list.name}
                              </li>
                            </ul>
                          ))}
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
                <Link to="/MainPage" className="subNavItem">
                  <img
                    alt="navLogo"
                    className="navLogo"
                    src="./images/MainLogoNF.png"
                  ></img>
                </Link>
              </div>
              <div className="navItem about">
                <Link to="/About" className="subNavItem">
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
        </nav>
        <div className="main">
          <MainFirst />
          <MainSecond />
          <MainThree />
          <div className="threeList">
            <div className="listContent">
              <Slider {...settings}>
                {this.state.listData.map((list) => {
                  return (
                    <Hairlist
                      image={list.image}
                      name={list.name}
                      short_info={list.short_info}
                      category_id={list.category_id}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
          <MainFour />
          <MainFive />
          <MainSix />
        </div>
        <MainFooter />
      </>
    );
  }
}

export default withRouter(Mainpage);
