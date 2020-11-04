import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function LiveSession() {
  const [events, setEvents] = useState([])
  const localizer = momentLocalizer(moment);
  console.log(localizer);


  return (
    <>
      <h1>Schedule For Live Streamings</h1>
      <div>
        <Calendar
          events={events}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </>
  );
}
