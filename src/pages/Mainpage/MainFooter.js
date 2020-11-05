import React, { Component } from "react";

class MainFooter extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          text: "shampoo + conditioner",
        },
        {
          text: "purple shampoo",
        },
        {
          text: "leave-in",
        },
        {
          text: "hair mask",
        },
        {
          text: "hair serum",
        },
        {
          text: "body wash + body lotion",
        },
        {
          text: "face cleanser",
        },
        {
          text: "face serum",
        },
        {
          text: "face moisturizer",
        },
        {
          text: "giftcards",
        },
      ],

      company: [
        {
          text: "our story",
        },
        {
          text: "our standards",
        },
        {
          text: "ingredients",
        },
        {
          text: "careers",
        },
        {
          text: "affiliates",
        },
        {
          text: "blog",
        },
        {
          text: "faq",
        },
        {
          text: "#definitionofbeauty",
        },
      ],

      resources: [
        {
          text: "contact us",
        },
        {
          text: "redeem",
        },
        {
          text: "privacy",
        },
        {
          text: "terms",
        },
        {
          text: "our guarantee",
        },
        {
          text: "actions > words",
        },
      ],
    };
  }
  render() {
    return (
      <div className="footer">
        <div className="footerSection">
          <div className="sectionInner">
            <div className="sectionTop">
              <div className="topCountry">
                <img alt="footerKorea" src="./images/footerKorea.png"></img>
                <span>Korea</span>
              </div>
              <span className="topIcon">
                <img alt="facebook" src="./images/facebook.svg"></img>
                <img alt="instagram" src="./images/instagram.svg"></img>
                <img alt="pinterest" src="./images/pinterest.svg"></img>
                <img alt="youtube" src="./images/youtube.svg"></img>
                <img alt="twitter" src="./images/twitter.svg"></img>
              </span>
            </div>
            <div className="sectionBottom">
              <div className="footerSectionDiv">
                <ul>
                  <li className="bottomTitle">products</li>
                  {this.state.products.map((list) => {
                    return <li className="listText">{list.text}</li>;
                  })}
                </ul>
              </div>
              <div className="footerSectionDiv">
                <ul>
                  <li className="bottomTitle">company</li>
                  {this.state.company.map((list) => {
                    return <li className="listText">{list.text}</li>;
                  })}
                </ul>
              </div>
              <div className="footerSectionDiv">
                <ul>
                  <li className="bottomTitle">resources</li>
                  {this.state.resources.map((list) => {
                    return <li className="listText">{list.text}</li>;
                  })}
                </ul>
              </div>
              <div className="sectionDivText">
                <div className="divTextContent">
                  <p>
                    join the<em>function fam</em>
                  </p>
                </div>
                <div className="functionFamText">
                  Get the scoop on launches, promos, and occasional dog pics.
                  Unsubscribe at any time.
                </div>
                <div className="divTextInput">
                  <input type="text" placeholder="Email address"></input>
                  <button>Go!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="functionOfBeauty">© function of beauty 2020</p>
      </div>
    );
  }
}

export default MainFooter;
