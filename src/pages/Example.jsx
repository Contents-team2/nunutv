import React from "react";

const Example = () => {
  return <div>Example Page</div>;
};

export default Example;

export const exampleLoader = async () => {
  const res = await fetch("/getData");
  return res.json();
};
