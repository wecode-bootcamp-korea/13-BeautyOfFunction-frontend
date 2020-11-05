import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainFirst extends Component {
  render() {
    return (
      <>
        <div className="mainFirst">
          <div className="firstImg">
            <div className="centerText">
              <section>
                <h1 data-aos="fade-right" data-aos-duration="2000">
                  the world leader in
                  <br />
                  customizable beauty
                </h1>
                <div data-aos="fade-up" data-aos-duration="2000">
                  <div className="line"></div>
                  <div className="textCenter">
                    <h2 className="textCenterOne">100% custom hair, skin,</h2>
                    <br />
                    <h2 className="textCenterTwo">and body care.</h2>
                  </div>
                  <Link to="/Quiz" className="centerBtn">
                    first, the hair quiz
                  </Link>
                  <Link to="/Quiz" className="centerText">
                    or, take the skin quiz
                  </Link>
                </div>
              </section>
              <div className="centerRight"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainFirst;
