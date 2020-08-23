import React, { useState } from "react";
import "./DietComponents.scss";
import "../../Components/Container/Container.scss";
import DietComponent from "./DietComponent/DietComponent";

const DietComponents = () => {

  return (
    <section className="diet-components-wrapper">
      <div className="container">
        <h2 className="diet-components-headline">Składniki diety:</h2>
        <div className="diet-components__first__row">
          <DietComponent className="meat" text="Dobrej jakości mięso" />
          <DietComponent className="eggs" text="Świeże jaja" />
          <DietComponent className="grain" text="Bezglutenowe zboże" />
        </div>
        <div className="diet-components__second__row">
          <DietComponent className="vegetables" text="Warzywa" />
          <DietComponent className="fruits" text="Owoce" />
        </div>
      </div>
    </section>
  );
};

export default DietComponents;
