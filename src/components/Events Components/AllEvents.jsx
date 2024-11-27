import React from "react";
import { events } from "../../data/data";
import EventCard from "../EventCard";
const AllEvents = () => {
  return (
    <div className="container py-4">
      <h2 className="mt-3">All Events</h2>
      <div className="d-flex justify-content-between flex-wrap">
        {events.map((event) => {
          return <EventCard key={event._id} {...event} />;
        })}
      </div>
    </div>
  );
};

export default AllEvents;
