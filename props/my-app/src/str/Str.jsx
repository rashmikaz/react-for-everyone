import React from "react";

const Str = (props) => {
  return (
    <div>
      <h1>{props.welcome}</h1>
      <h1>{props.title}</h1>
      <h1>{props.subtitle}</h1>
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <h1>{props.date}</h1>
    </div>
  );
};

export default Str;
