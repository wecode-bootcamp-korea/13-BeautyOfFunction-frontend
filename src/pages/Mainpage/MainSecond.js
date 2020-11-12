import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainSecond extends Component {
  render() {
    return (
      <div className="mainSecond">
        <div className="secondLeft">
          <div className="leftImg">
            <img alt="mainSecond" src="./images/mainSecond2.png"></img>
          </div>
        </div>
        <div className="secondRight">
          <div className="rightContent">
            <div className="textContent">
              <div className="rightOne">
                <div className="oneBorder">
                  <div>new</div>
                  <div>new</div>
                  <div>new</div>
                </div>
              </div>
              <h2>face it</h2>
              <h3>we couldn't stop at hair</h3>
              <p>
                Take the skin quiz and get your one-in-three-billion, complete,
                skin routine.
              </p>
              <Link to="">let's talk hair</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSecond;
