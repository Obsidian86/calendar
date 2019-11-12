import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import Calendar from "./calendar";

const items = [
    { item: "item 1", date: "11-21-2019" },
    { item: "item 2", date: "1-15-2020", end: "5-15-2020", rec: 'monthly' },
    { item: "item 3", date: "11-31-2017", end: "5-31-2025", rec: 'yearly' },
    { item: "item 4", date: "11-31-2017", end: "5-31-2025", rec: 'weekly' },
    { item: "item 5", date: "11-31-2017", end: "5-31-2025", rec: 'biWeekly' },
    { item: "item 6", date: "11-31-2017", end: "5-31-2025", rec: 'biWeekly', color: 'green' }
  ] 

ReactDOM.render(
  <>
    <Calendar 
      items={items}
      clickDay={p => console.log(p)}
      clickEvent={p => console.log(p)}
      clickThisDate={p => console.log(p)}
      clickPrev={p => console.log(p)} 
      clickNext={p => console.log(p)}
    />
  </>
  , document.getElementById("root"));