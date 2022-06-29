
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales={
  'en-US':require('date-fns/locale/en-US')

}

const localizer=dateFnsLocalizer({
format,
parse,
startOfWeek,
getDay,
locales
})
//array of objects 
const events = [
  {
    title:"Nelia's Meeting with X",
    allDay: true,
    start: new Date(2022,6,0),
    end: new Date(2022,6,0),
  },
  {
    title:"Birthdat",
    allDay: true,
    start: new Date(2022,6,0),
    end: new Date(2022,6,0),
  },
 {
  title:"Last Day at Work",
  allDay: true,
  start: new Date(2022,6,0),
  end: new Date(2022,6,0),
 }
]
function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
      setAllEvents([...allEvents, newEvent]);
  }

  return (
      <div className="App">
          <h1>Calendar</h1>
          <h2>Add A New Event</h2>
          <div className="date-picker-container">
              <input type="text" placeholder="Add Title"  value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
              <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
              <button  onClick={handleAddEvent}>
                  Add Event
              </button>
          </div>
          <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
      </div>
  );
}

export default App;