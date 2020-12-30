import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Hairlist extends Component {
  render() {
    const { image, name, short_info, category_id } = this.props;
    return (
      <div className="listBox">
        <div
          className="listImg"
          onClick={() => this.props.history.push(`/detail${category_id}`)}
        >
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

export default withRouter(Hairlist);
