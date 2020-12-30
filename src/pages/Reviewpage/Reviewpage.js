import React, { useState, useEffect, Component } from "react";
import "./Reviewpage.scss";
import styled, { keyframes } from "styled-components";
import { FaStar, FaThList } from "react-icons/fa";
import ReviewData from "./ReviewpageData";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { YJ_URL } from "../../config";

class Reviewpage extends Component {
  constructor() {
    super();
    this.state = {
      title: "SHAMPOO & CONDITIONER",
      content: ReviewData.review_ratings,
      review_list: ReviewData.review_list,
      titleList: [
        { SHAMPOO_CONDITIONER: 1 },
        { LEAVE_IN: 2 },
        { HAIR_MASK: 6 },
        { HAIR_SERUM: 7 },
      ],

      list: false,
      filter: ReviewData.FILTER,
      product_id: "",
      hairtype: "",
      hairstructure: "",
      scalpmoisture: "",
    };
  }

  changeName = (el, idx) => {
    const filter = this.state.filter.filter((item) => item.id === idx);
    filter[0].key = el;

    if (idx === 0) {
      let items = ["wavy", "curly", "coily"];
      let index = items.indexOf(filter[0].key);
      console.log("index1", index);
      this.setState({ hairtype: index }, () => {
        fetch(
          `${YJ_URL}/review/get?product_id=${this.state.product_id}&offset=0&limit=5&hair_type=${this.state.hairtype}&hair_structure=${this.state.hairstructure}&scalp_moisture=${this.state.scalpmoisture}`
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            this.setState({
              content: res.review_ratings,
              review_list: res.reviews,
            });
          });
      });
    }

    if (idx === 1) {
      let items = ["fine", "medium", "coarse"];
      let index = items.indexOf(filter[0].key);
      console.log("index2", index);
      this.setState({ hairstructure: index }, () => {
        fetch(
          `${YJ_URL}/review/get?product_id=${this.state.product_id}&offset=0&limit=5&hair_type=${this.state.hairtype}&hair_structure=${this.state.hairstructure}&scalp_moisture=${this.state.scalpmoisture}`
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            this.setState({
              content: res.review_ratings,
              review_list: res.reviews,
            });
          });
      });
    }

    if (idx === 2) {
      let items = ["dry", "normal", "oily"];
      let index = items.indexOf(filter[0].key);
      console.log("index3", index);
      this.setState({ scalpmoisture: index }, () => {
        fetch(
          `${YJ_URL}/review/get?product_id=${this.state.product_id}&offset=0&limit=5&hair_type=${this.state.hairtype}&hair_structure=${this.state.hairstructure}&scalp_moisture=${this.state.scalpmoisture}`
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            this.setState({
              content: res.review_ratings,
              review_list: res.reviews,
            });
          });
      });
    }

    this.setState({ filter });

    fetch(
      `${YJ_URL}/review/get?product_id=${this.state.product_id}&offset=0&limit=5&hair_type=${this.state.hairtype}&hair_structure=${this.state.hairstructure}&scalp_moisture=${this.state.scalpmoisture}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          content: res.review_ratings,
          review_list: res.reviews,
        });
      });
  };

  changeTitle = (el) => {
    this.setState({ list: !this.state.list });
    this.setState({ title: Object.keys(el) });
    this.setState({ product_id: Object.values(el)[0] });

    fetch(
      `${YJ_URL}/review/get?product_id=${this.state.product_id}&offset=0&limit=5&hair_type=${this.state.hairtype}&hair_structure=${this.state.hairstructure}&scalp_moisture=${this.state.scalpmoisture}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          content: res.review_ratings,
          review_list: res.reviews,
        });
      });
  };

  listHandler = () => {
    this.setState({ list: !this.state.list });
  };

  toggleActive = (el, idx) => {
    const filter = this.state.filter;
    el.toggle = !el.toggle;
    this.setState({ filter });
  };

  render() {
    const starDiv = [];
    const star = <FaStar />;
    let rating = 4;
    for (let i = 0; i < rating; i++) {
      starDiv.push(star);
    }
    const { review_list } = this.state;
    const { titleList, list, title, content, filter } = this.state;
    const { hairtype, hairstructure, scalpmoisture } = this.state;

    const {
      total,
      average,
      rating_five,
      rating_four,
      rating_three,
      rating_two,
      rating_one,
    } = this.state.content[0];

    return (
      <>
        <Nav />
        <div className="Reviewpage">
          <div className="productToggleContainer">
            <h4>over 110,000 5-star products reviewed!</h4>
            <div className="productToggle">
              <div onClick={() => this.listHandler()}>▾</div>
              <div className="productToggle">{title}</div>
            </div>
            <div className={list ? "listContainer" : "listContainer None"}>
              {titleList?.map((el, idx) => (
                <div onClick={() => this.changeTitle(el)}>
                  {Object.keys(el)}
                </div>
              ))}
            </div>
          </div>
          <div className="reviewAverage">
            <span className="reviewAverageNum">{average}</span>
            <div className="reviewCountContainer">
              <div className="reviewStars">
                <img src="./Images/star_rating2.png" />
                <div
                  style={{ width: average * 30 + "px" }}
                  className="starFilled"
                ></div>
              </div>
              <div className="reviewCount">{total} Reviews</div>
            </div>
          </div>
          <div className="chartAndImage">
            <div className="chartContainer">
              <div className="starTable">
                <div className="starRow">
                  <span className="star">5 stars</span>
                  <div className="starBar">
                    <div
                      className="starBarFilled"
                      style={{ width: (rating_five / total) * 100 + "%" }}
                    ></div>
                  </div>
                  <span className="count">({rating_five})</span>
                </div>
                <div className="starRow">
                  <span className="star">4 stars</span>
                  <div className="starBar">
                    <div
                      className="starBarFilled"
                      style={{ width: (rating_four / total) * 100 + "%" }}
                    ></div>
                  </div>
                  <span className="count">({rating_four})</span>
                </div>
                <div className="starRow">
                  <span className="star">3 stars</span>
                  <div className="starBar">
                    <div
                      className="starBarFilled"
                      style={{ width: (rating_three / total) * 100 + "%" }}
                    ></div>
                  </div>
                  <span className="count">({rating_three})</span>
                </div>
                <div className="starRow">
                  <span className="star">2 stars</span>
                  <div className="starBar">
                    <div
                      className="starBarFilled"
                      style={{ width: (rating_two / total) * 100 + "%" }}
                    ></div>
                  </div>
                  <span className="count">({rating_two})</span>
                </div>
                <div className="starRow">
                  <span className="star">1 stars</span>
                  <div className="starBar">
                    <div
                      className="starBarFilled"
                      style={{ width: (rating_one / total) * 100 + "%" }}
                    ></div>
                  </div>
                  <span className="count">({rating_one})</span>
                </div>
              </div>
            </div>
            <OpacityImg>
              <img style={{ height: "220px" }} src="./Images/mint.png" />
            </OpacityImg>
          </div>
          <div className="buttonArea">
            <div className="quizLink">
              <div>TAKE THE HAIR QUIZ</div>
            </div>
          </div>
          <div className="reviewDesc">
            <img src="./Images/orange.png" />
            <div className="reviewDescription">
              <h2>shop with confidence</h2>
              <p>
                Every review submitted on this page is from a real Function of
                Beauty customer who has purchased a set. In the interest of
                transparency, we never change reviews or use incentives to
                influence these reviews – the opinions expressed are those of
                our customers and are not endorsed by Function of Beauty. Our
                products are not intended to diagnose, treat, cure, or prevent
                any type of disease related to your hair or skin. Instead, we
                are focused on helping you achieve your hair and skin goals –
                and these reviews show how many people with different hair,
                skin, and body types and needs were able to do just that.
              </p>
            </div>
          </div>
          <div className="reviewArea">
            <div className="filterReview">
              <div className="filterTitle">Filter Reviews</div>
              <div className="filterToggles">
                {filter?.map((el, idx) => (
                  <div className="dropboxContainer">
                    <div
                      className="filterContainer"
                      onClick={() => this.toggleActive(el, idx)}
                    >
                      <div className="filter">
                        <div>{el.key}</div>
                        <div>{el.icon}</div>
                      </div>
                      <div
                        className={
                          el.toggle ? "dropdownContents" : "dropdownNone"
                        }
                      >
                        {el.items?.map((el) => (
                          <div onClick={() => this.changeName(el, idx)}>
                            {el}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="reviewSum">
                <h4>42 Reviews</h4>
                <h5>Sort: Select</h5>
              </div>
              {review_list?.map((el) => (
                <div className="review">
                  <div className="buyer">
                    <div className="buyerInfo">
                      <span>{el.name}</span>
                      {starDiv}
                      <span>{el.status}</span>
                    </div>
                    <div>{el.created_at}</div>
                  </div>
                  <div className="starRating"></div>
                  <div className="comment">
                    <div>{el.title}</div>
                    <div>{el.comment}</div>
                  </div>
                </div>
              ))}
              <div className="pagination">
                {PAGES.map((el) => (
                  <span>{el}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const Opacity = keyframes`from {opacity : 0} to {
  opacity : 1}`;

const OpacityImg = styled.div`
  animation: ${Opacity} 1s;
  padding-left: 200px;
  height: 220px;
`;

const PAGES = ["〈", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "〉"];

export default Reviewpage;
