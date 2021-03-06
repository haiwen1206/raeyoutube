import React from "react";

// props = {id }
const Image = (props) => {
  const { link, name, className } = props;
  //const type = props.type || "";
  return <img src={link} alt={name} srcSet={link} className={className} />;
};

export default Image;
