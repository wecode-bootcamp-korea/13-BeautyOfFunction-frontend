import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      img: [
        {
          alt: "facebook",
          img: "./images/facebook.svg",
        },
        {
          alt: "instagram",
          img: "./images/instagram.svg",
        },
        {
          alt: "pinterest",
          img: "./images/pinterest.svg",
        },
        {
          alt: "youtube",
          img: "./images/youtube.svg",
        },
        {
          alt: "twitter",
          img: "./images/twitter.svg",
        },
      ],
    };
  }
  render() {
    return (
      <footer>
        <div className="footerContainer">
          <div className="footerLeft">
            {this.state.img.map((img) => {
              return <img alt={img.alt} src={img.img}></img>;
            })}
          </div>
          <div className="footerRight">
            <span>contact</span>
            <span>careers</span>
            <span>privacy</span>
            <span>terms</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
