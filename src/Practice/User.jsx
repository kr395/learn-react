// To Learn Props and Card Component in React
import React from "react";
import PropTypes from "prop-types";

export default function User(Props) {
  return (
    <div className="usercard">
      <div className="topSection">
        <img src={Props.imgLink} className="pp"></img>
        <h3>{Props.name}</h3>
      </div>
      <div className="bottomSection">
        <p>Age: {Props.age}</p>
        <p>City: {Props.city}</p>
      </div>
      
      <div className="statusMenu">
        <span class="material-symbols-outlined">thumb_up</span>
        <span>{Props.likeCount}</span>
        <span class="material-symbols-outlined">thumb_down</span>
        <span>{Props.dislikeCount}</span>
      </div>
    </div>
  );
}
User.propTypes = {
  imgLink: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  city: PropTypes.string,
  likeCount: PropTypes.number,
  dislikeCount: PropTypes.number,
};
