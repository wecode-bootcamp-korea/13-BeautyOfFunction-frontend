import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainFour extends Component {
  render() {
    return (
      <div className="mainFour">
        <div className="fourReviews">
          <div className="reviewsLeft">
            <div className="reviewsImg">
              <img alt="mainFour" src="./images/mainFour.png"></img>
            </div>
          </div>
          <div className="reviewsRight">
            <div className="rightCenter">★★★★★</div>
            <h2 className="rightCenterText1">52,000 five-star reviews</h2>
            <h4 className="rightCenterText2">+ happy customers</h4>
            <div className="rightCenterImg">
              <img alt="mainFourText" src="./images/mainFourText.png" />
            </div>
            <Link to="/Reviewpage">read the reviews</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MainFour;
