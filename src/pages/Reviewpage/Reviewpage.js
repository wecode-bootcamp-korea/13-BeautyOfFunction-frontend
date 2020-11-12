// import React, { useState, useEffect, Component } from "react";
// import "./Reviewpage.scss";
// import styled, { keyframes } from "styled-components";
// import { FaStar } from "react-icons/fa";
// import ReviewData from "./ReviewpageData";

// class Reviewpage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "SHAMPOO & CONDITIONER",
//       content: [
//         { stars: "5 stars", cnt: 52219, total: 63228, starRating: 4.9 },
//         { stars: "4 stars", cnt: 5143, total: 63228 },
//         { stars: "3 stars", cnt: 2068, total: 63228 },
//         { stars: "2 stars", cnt: 1702, total: 63228 },
//         { stars: "1 stars", cnt: 2096, total: 63228 },
//       ],

//       titleList: [
//         "SHAMPOO & CONDITIONER",
//         "PURPLE SHAMPOO",
//         "LEAVE-IN",
//         "HAIR MASK",
//         "HAIR SERUM",
//       ],

//       list: false,
//       filter: ReviewData.FILTER,
//       hairtype: "",
//       hairstructure: "",
//       scalpmoisture: "",
//     };
//   }

//   changeName = (el, idx) => {
//     const filter = this.state.filter.filter((item) => item.id === idx);
//     filter[0].key = el;

//     this.setState({ filter });
//   };

//   changeTitle = (el) => {
//     this.setState({ list: !this.state.list });
//     this.setState({ title: el });
//     this.setState({ content: ReviewData.STARTABLE[el] });

//     if (el.id === 0) {
//       this.setState({ hairtype: el });
//     }
//     if (el.id === 1) {
//       this.setState({ hairstructure: el });
//     }
//     if (el.id === 2) {
//       this.setState({ scalpmoisture: el });
//     }

//     console.log(this.state.hairstructure);
//   };

//   listHandler = () => {
//     this.setState({ list: !this.state.list });
//   };

//   toggleActive = (el, idx) => {
//     console.log("idx", el.id);
//     const filter = this.state.filter;
//     el.toggle = !el.toggle;
//     this.setState({ filter });

//     if (el.id === 0) {
//       this.setState({ hairtype: el });
//     }
//     if (el.id === 1) {
//       this.setState({ hairstructure: el });
//     }
//     if (el.id === 2) {
//       this.setState({ scalpmoisture: el });
//     }

//     console.log(this.state.hairstructure);
//   };

//   comp;
//   toggleActive = (el) => {
//     const filter = this.state.filter;
//     el.toggle = !el.toggle;
//     this.setState({ filter });
//   };

//   render() {
//     const starDiv = [];
//     const star = <FaStar />;
//     let rating = 4;
//     for (let i = 0; i < rating; i++) {
//       starDiv.push(star);
//     }
//     const { review_list } = this.state.review_list;
//     const { titleList, list, title, content, filter } = this.state;

//     const {
//       total,
//       average,
//       rating_five,
//       rating_four,
//       rating_three,
//       rating_two,
//       rating_one,
//     } = this.state.content[0];

//     const { titleList, list, title, content, filter } = this.state;
//     const { starRating } = this.state.content[0];

//     return (
//       <div className="Reviewpage">
//         <div className="productToggleContainer">
//           <h4>over 110,000 5-star products reviewed!</h4>
//           <div className="productToggle">
//             <div onClick={() => this.listHandler()}>▾</div>
//             <div className="productToggle">{title}</div>
//           </div>
//           <div className={list ? "listContainer" : "listContainer None"}>
//             {titleList?.map((el) => (
//             {titleList.map((el) => (
//               <div onClick={() => this.changeTitle(el)}>{el}</div>
//             ))}
//           </div>
//         </div>
//         <div className="reviewAverage">
//           <span className="reviewAverageNum">{average}</span>
//           <span className="reviewAverageNum">{starRating}</span>
//           <div className="reviewCountContainer">
//             <div className="reviewStars">
//               <img src="./Images/star_rating2.png" />
//               <div
//                 style={{ width: average * 30 + "px" }}
//                 className="starFilled"
//               ></div>
//             </div>
//             <div className="reviewCount">{total} Reviews</div>
//                 style={{ width: starRating * 30 + "px" }}
//                 className="starFilled"
//               ></div>
//             </div>
//             <div className="reviewCount">{content[0].total} Reviews</div>
//           </div>
//         </div>
//         <div className="chartAndImage">
//           <div className="chartContainer">
//             <div className="starTable">
//               <div className="starRow">
//                 <span className="star">5 stars</span>
//                 <div className="starBar">
//                   <div
//                     className="starBarFilled"
//                     style={{ width: (rating_five / total) * 100 + "%" }}
//                   ></div>
//                 </div>
//                 <span className="count">{rating_five}</span>
//               </div>
//               <div className="starRow">
//                 <span className="star">4 stars</span>
//                 <div className="starBar">
//                   <div
//                     className="starBarFilled"
//                     style={{ width: (rating_four / total) * 100 + "%" }}
//                   ></div>
//                 </div>
//                 <span className="count">{rating_four}</span>
//               </div>
//               <div className="starRow">
//                 <span className="star">3 stars</span>
//                 <div className="starBar">
//                   <div
//                     className="starBarFilled"
//                     style={{ width: (rating_three / total) * 100 + "%" }}
//                   ></div>
//                 </div>
//                 <span className="count">{rating_three}</span>
//               </div>
//               <div className="starRow">
//                 <span className="star">2 stars</span>
//                 <div className="starBar">
//                   <div
//                     className="starBarFilled"
//                     style={{ width: (rating_two / total) * 100 + "%" }}
//                   ></div>
//                 </div>
//                 <span className="count">{rating_two}</span>
//               </div>
//               <div className="starRow">
//                 <span className="star">1 star</span>
//                 <div className="starBar">
//                   <div
//                     className="starBarFilled"
//                     style={{ width: (rating_one / total) * 100 + "%" }}
//                   ></div>
//                 </div>
//                 <span className="count">{rating_one}</span>
//               </div>
//               {content.map((el) => (
//                 <div className="starRow">
//                   <span className="star">{el.stars}</span>
//                   <div className="starBar">
//                     <div
//                       className="starBarFilled"
//                       style={{ width: (el.cnt / el.total) * 100 + "%" }}
//                     ></div>
//                   </div>
//                   <span className="count">({el.cnt})</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <OpacityImg>
//             <img style={{ height: "220px" }} src="./Images/mint.png" />
//           </OpacityImg>
//         </div>
//         <div className="buttonArea">
//           <div className="quizLink">
//             <div>TAKE THE HAIR QUIZ</div>
//           </div>
//         </div>
//         <div className="reviewDesc">
//           <img src="./Images/orange.png" />
//           <div className="reviewDescription">
//             <h2>shop with confidence</h2>
//             <p>
//               Every review submitted on this page is from a real Function of
//               Beauty customer who has purchased a set. In the interest of
//               transparency, we never change reviews or use incentives to
//               influence these reviews – the opinions expressed are those of our
//               customers and are not endorsed by Function of Beauty. Our products
//               are not intended to diagnose, treat, cure, or prevent any type of
//               disease related to your hair or skin. Instead, we are focused on
//               helping you achieve your hair and skin goals – and these reviews
//               show how many people with different hair, skin, and body types and
//               needs were able to do just that.
//             </p>
//           </div>
//         </div>
//         <div className="reviewArea">
//           <div className="filterReview">
//             <div className="filterTitle">Filter Reviews</div>
//             <div className="filterToggles">
//               {filter?.map((el, idx) => (
//                 <div className="dropboxContainer">
//                   <div
//                     className="filterContainer"
//                     onClick={() => this.toggleActive(el, idx)}
//                     onClick={() => this.toggleActive(el)}
//                     onBlur={() => this.toggleActive(el)}
//                   >
//                     <div className="filter">
//                       <div>{el.key}</div>
//                       <div>{el.icon}</div>
//                     </div>
//                     <div
//                       className={
//                         el.toggle ? "dropdownContents" : "dropdownNone"
//                       }
//                     >
//                       {el.items?.map((el) => (
//                       {el.items.map((el) => (
//                         <div onClick={() => this.changeName(el, idx)}>{el}</div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="reviewSum">
//               <h4>42 Reviews</h4>
//               <h5>Sort: Select</h5>
//             </div>
//             {review_list?.map((el) => (
//             {ReviewData.REVIEWTABLE.map((el) => (
//               <div className="review">
//                 <div className="buyer">
//                   <div className="buyerInfo">
//                     <span>{el.name}</span>
//                     {starDiv}
//                     <span>{el.status}</span>
//                   </div>
//                   <div>{el.created_at}</div>
//                   <div>{el.date}</div>
//                 </div>
//                 <div className="starRating"></div>
//                 <div className="comment">
//                   <div>{el.title}</div>
//                   <div>{el.comment}</div>
//                   <div>{el.content}</div>
//                 </div>
//               </div>
//             ))}
//             <div className="pagination">
//               {PAGES.map((el) => (
//                 <span>{el}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// //Styled Component
// const Opacity = keyframes`from {opacity : 0} to {
//   opacity : 1}`;

// const OpacityImg = styled.div`
//   animation: ${Opacity} 1s;
//   padding-left: 200px;
//   height: 220px;
// `;

// const PAGES = ["〈", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "〉"];

// export default Reviewpage;
