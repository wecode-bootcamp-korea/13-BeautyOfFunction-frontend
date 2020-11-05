import React, { Component } from "react";

class MainSix extends Component {
  render() {
    return (
      <div className="mainSix">
        <div className="sixLeft">
          <div className="leftText">
            <h3>
              clean, science-
              <br />
              backed ingredients
            </h3>
            <p>
              Every product we formulate is free of sulfates, parabens,
              phthalates, mineral oils, gluten, and is always vegan +
              cruelty-free.
            </p>
            <div
              className="sixLeftImg"
              data-aos="fade-up-left"
              data-aos-duration="1700"
            >
              <div className="leftDetail">
                <img alt="sixImg1" src="./images/sixImg1.png"></img>
              </div>
              <div className="leftDetail">
                <img alt="sixImg2" src="./images/sixImg2.png"></img>
              </div>
              <div className="leftDetail">
                <img alt="sixImg3" src="./images/sixImg3.png"></img>
              </div>
              <div className="leftDetail">
                <img alt="sixImg4" src="./images/sixImg4.png"></img>
              </div>
              <div className="leftDetail">
                <img alt="sixImg5" src="./images/sixImg5.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSix;
