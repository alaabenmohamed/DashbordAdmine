import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Paper, Stack } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";


function renderEventContent(eventInfo :any) {
  return (
    <>
  
      <b>{eventInfo.timeText}</b>
      
   
      <i>{eventInfo.event.title}</i>
      
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderSidebarEvent(event:any) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}



function Calendar() {
    const [weekendsVisible, setweekendsVisible] = useState(true);
    const [currentEvents, setcurrentEvents] = useState([]);

    const handleWeekendsToggle = () => {
      setweekendsVisible(!weekendsVisible);
    };

    let eventGuid = 0;
    function createEventId() {
      return String(eventGuid++);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDateSelect = (selectInfo : any) => {
      const title = prompt("Please enter a new title for your event");
      const  calendarApi = selectInfo.view.calendar;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      calendarApi.unselect(); // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEventClick = (clickInfo :any) => {
      if (
        confirm(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `Are you sure you want to delete the event '${clickInfo.event.title}'`
        )
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        clickInfo.event.remove();
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEvents = (events : any) => {
      setcurrentEvents(events);
    };

  return (
    <Stack direction={"row"}>
      <Paper className="demo-app-sidebar">
        <h2 style={{ textAlign: "center" }}>
          All Events ({currentEvents.length})
        </h2>
        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
      </Paper>

      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </div>
    </Stack>
  );
}

export default Calendar
