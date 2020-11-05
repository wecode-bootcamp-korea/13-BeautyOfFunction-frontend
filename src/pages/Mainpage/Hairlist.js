import React, { Component } from "react";
const API = "http://10.58.7.250:8000/products";

class Hairlist extends Component {
  render() {
    const { image, name, short_info } = this.props;
    return (
      <div className="listBox">
        <div className="listImg">
          <a>
            <img src={image}></img>
          </a>
        </div>
        <div className="listText">
          <p className="listName">
            <a>{name}</a>
          </p>
          <p className="listExplain">{short_info}</p>
          <a className="listLink">customize</a>
        </div>
      </div>
    );
  }
}

export default Hairlist;
