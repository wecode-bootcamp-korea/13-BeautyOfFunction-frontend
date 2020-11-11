// eslint-disable-next-line prettier/prettier
import React, {Component} from "react";
// eslint-disable-next-line prettier/prettier
import {Link} from "react-router-dom";
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
      showAbout: false,
      listData: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.4.110:8000/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // eslint-disable-next-line prettier/prettier
        this.setState({listData: res.product_list});
      });

    AOS.init({
      duration: 800,
      delay: 400,
    });
  }

  openQuiz = () => {
    if (this.state.showQuiz === true) {
      // eslint-disable-next-line prettier/prettier
      this.setState({showQuiz: false});
    }
    if (this.state.showQuiz === false) {
      // eslint-disable-next-line prettier/prettier
      this.setState({showQuiz: true});
    }
  };

  openProducts = () => {
    if (this.state.showProducts === true) {
      // eslint-disable-next-line prettier/prettier
      this.setState({showProducts: false});
    }
    if (this.state.showProducts === false) {
      // eslint-disable-next-line prettier/prettier
      this.setState({showProducts: true});
    }
  };

  openAbout = () => {
    if (this.state.showAbout === true) {
      // eslint-disable-next-line prettier/prettier
      this.setState({showAbout: false});
    }
    if (this.state.showAbout === false) {
      // eslint-disable-next-line prettier/prettier
      this.setState({showAbout: true});
    }
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
    console.log(this.state.listData);
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
                <a href="# " className="subNavItem" onClick={this.openProducts}>
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
                                  list.history.push(`/detail/${list.id}`)
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
                    src="./images/MainLogo.png"
                  ></img>
                </Link>
              </div>
              <div className="navItem about">
                <a href="# " className="subNavItem" onClick={this.openAbout}>
                  about
                  <img
                    alt="navArrowDown"
                    className="arrowDown"
                    src="./images/arrowdown.png"
                  ></img>
                </a>
                {this.state.showAbout ? (
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
                ) : null}
              </div>
              <Link to="/Signup" className="subNavItem">
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

export default Mainpage;
