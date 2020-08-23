import React, {useState} from "react";

const DietComponent = ({className, text}) => {
    const [active, setActive] = useState(false);

  return (
    <>
      <div
        className="diet-components__box"
        onMouseEnter={() => setActive(!active)}
        onMouseLeave={() => setActive(!active)}
      >
        <div className={`diet-components__box__${className}`}></div>
        <p className={active ? null : "show"}>{text}</p>
      </div>
    </>
  );
};

export default DietComponent;
