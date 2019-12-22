import React from "react";

const Home = props => {
  return (
    <div>
      Hey there! My name is Joshua Hillmann and Im 20 years old. <br></br>
      Im currently studying computer science in Dortmund and Im in my
      {props.semester} semester.
    </div>
  );
};

export default Home;
