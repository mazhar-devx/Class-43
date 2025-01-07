import React from "react";
import "./homeslidecard.css";
import Badge from "../Badge/Badge";
const homeslidecard = ({
  image,
  imgAltText,
  personName,
  designation,
  badges,
}) => {
  return (
    <div>
      <div className="slideCard">
        <img className="personImage" src={image} alt={imgAltText} />
        <div className="personInfo">
          <div>
            <div className="name">{personName}</div>
            <div className="designation">{designation}</div>
          </div>
          <div className="badges">
            {badges.map((element, index) => (
              <Badge key={index} data={element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default homeslidecard;
