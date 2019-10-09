import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

function Menuitem(props) {
  const { title, size, imageUrl, history, match, linkUrl } = props;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(Menuitem);
