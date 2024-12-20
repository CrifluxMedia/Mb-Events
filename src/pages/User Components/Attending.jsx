import React from "react";
import EventCard from "../../components/EventCard";
import { events } from "../../data/data";
import Pagination from "../../components/Pagination";

const Attending = () => {
  return (
    <div className="container">
      <h2 className="my-3">Events Attending</h2>
      <div className="d-flex justify-content-between flex-wrap">
        {events.slice(3, 6).map((event) => {
          return <EventCard key={event._id} {...event} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Attending;
