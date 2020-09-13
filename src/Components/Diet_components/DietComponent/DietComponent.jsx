import React, {useState} from "react";

const DietComponent = ({className, text}) => {

  return (
    <>
      <div
        className="diet-components__box"
      >
        <div className={`diet-components__box__meal diet-components__box__${className}`}></div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default DietComponent;
