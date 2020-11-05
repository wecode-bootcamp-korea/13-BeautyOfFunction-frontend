import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainFive extends Component {
  render() {
    return (
      <div className="mainFive">
        <h2>how it works</h2>
        <div className="howItWorks1 step1">
          <div className="works1Text" data-aos="fade-up">
            <sup className="stepNumber">1/3</sup>
            <span className="stepHeader">you take the quiz</span>
            <div className="stepText">
              You tell us a little about your hair, body, or skin, then choose
              your goals, fragrance, and name of your unique formula. There are
              trillions of possible formulations, but only one Function of YOU.
            </div>
            <Link to="/Quiz" className="stepBtn">
              take the hair quiz
            </Link>
          </div>
          <div className="works1Img" data-aos="fade-left">
            <img alt="stepOne" src="./images/step1.jpg"></img>
          </div>
        </div>
        <div className="howItWorks1 step2">
          <div className="works1Text" data-aos="fade-up">
            <sup className="stepNumber">2/3</sup>
            <span className="stepHeader">WE FORMULATE + CUSTOMIZE</span>
            <div className="stepText">
              We process your answers to determine the unique blend of clean
              ingredients needed to address your specific needs, goals, and
              preferences (because sometimes you need a team of eco-conscious
              MIT-trained scientists + engineers to help you with your care
              regimen).
            </div>
            <Link to="/Quiz" className="stepBtn2">
              design your hair formula
            </Link>
          </div>
          <div className="works1Img" data-aos="fade-right">
            <img alt="stepTwo" src="./images/step2.jpg"></img>
          </div>
        </div>
        <div className="howItWorks1 step3">
          <div className="works1Text" data-aos="fade-up">
            <sup className="stepNumber">3/3</sup>
            <span className="stepHeader">
              YOU PART WAYS WITH DRUGSTORE PRODUCTS FOR GOOD
            </span>
            <div className="stepText">
              Once completed, your formula(s) are delivered right to your door
              along with extra good stuff (think: pumps, stickers, gifts,
              personalized regimen card). We hope you like compliments ☺
            </div>
            <Link to="/Quiz" className="stepBtn">
              get started
            </Link>
          </div>
          <div className="works1Img" data-aos="fade-left">
            <img alt="stepThree" src="./images/step3.jpg"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default MainFive;
