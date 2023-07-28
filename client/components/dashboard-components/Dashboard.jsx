import React, { Component } from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import UserPage from "../profile-components/UserPage";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import MatchContainer from "../match-components/MatchContainer";

const Dashboard = () => {
  // const { matchList, total } = useSelector((store) => store.matches);
  const { user_id } = useSelector((state) => state.auth);
  // const [matches, setMatches] = useState(0);
  const handleImages = async () => {
    const images = await axios.get("api/images/getImages", { params: user_id });
    console.log("images", images);
  };

  const handleButtonIncrement = () => {
    // setMatches(matches + 1);
    console.log(total);
    console.log(matchList);
  };

  return (
    <>
      <div>{/* <Carousel /> */}</div>
      {/* <h2>You have {total} matches!</h2> */}
      {/* <MatchContainer /> */}
      <button onClick={handleImages}>Increment</button>
      <button>Find Matches</button>
    </>
  );
};

export default Dashboard;
