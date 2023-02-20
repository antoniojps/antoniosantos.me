import React from "react";
import { formatDistance } from "date-fns";
import { AsideNote } from "../AsideNote";

const REACT_DATE = "2018-11-01";
const JAVASCRIPT_DATE = "2017-01-01";
const HIRED_DATE = "2019-02-01";

export const Experience = () => {
  const distanceReact = formatDistance(new Date(), new Date(REACT_DATE));
  const distanceJavascript = formatDistance(new Date(), new Date(JAVASCRIPT_DATE));
  const distanceHired = formatDistance(new Date(), new Date(HIRED_DATE));

  return (
    <>
      <h2>How many years of experience do you have?</h2>
      <p>As a professional frontend developer I have {distanceHired} of experience.</p>
      <p>The fundamentals - HTML, CSS and Javascript, {distanceJavascript}.</p>
      <p>React, {distanceReact}</p>
      <AsideNote>This is calculcated on every website build</AsideNote>
    </>
  );
};

export default Experience;
