import React, { Component } from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import UserPage from "./UserPage";
import { useState } from "react";
import { useSelector } from "react-redux";
import MatchContainer from "../match-components/MatchContainer";

const Dashboard = () => {
  // const { matchList, total } = useSelector((store) => store.matches);

  // const [matches, setMatches] = useState(0);

  const handleButtonIncrement = () => {
    // setMatches(matches + 1);
    console.log(total);
    console.log(matchList);
  };

  return (
    <>
      <div>{/* <Carousel /> */}</div>
      {/* <h2>You have {total} matches!</h2> */}
      <MatchContainer />
      {/* <button onClick={handleButtonIncrement}>Increment</button>
      <button>Find Matches</button> */}
    </>
  );
};

export default Dashboard;
