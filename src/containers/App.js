import React from "react";

import Navbar from "../components/Navbar/Navbar";
import TourList from "../components/TourList/TourList";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}
