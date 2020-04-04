import React from "react";

import Tour from "../Tour/Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

class TourList extends React.Component {
  state = { tours: tourData };
  // initial state setup
  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({ tours: sortedTours });
  };
  // helper function
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
export default TourList;
