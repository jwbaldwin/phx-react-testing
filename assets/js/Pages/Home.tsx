import React from "react";

const Home: React.FC = (props) => {
  return (
    <div className="text-lime-500 font-medium text-3xl">
      Hello, TypeScript World! {props.name}
    </div>
  );
};

export default Home;
