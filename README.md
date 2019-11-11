## Calendar
### A simple calendar for displaying events

### Usage

### Accepts params
**targetMonth** default is current month
**targetYear** default is current year
**items** Array of objects
    ```
    var items = [
      // (Sigle item with event marked on calendar)
      { item: "asdasdok", date: "11-21-2019" }, 
      // Recurring objects will include 'rec', and will add an event every monthly/yearly/weekly/biWeekly
      { item: "range 1-15-2020 5-15", date: "1-15-2020", end: "5-15-2020", rec: 'monthly' },
      { item: "year test", date: "11-31-2017", end: "5-31-2025", rec: 'yearly' },
      { item: "weekly", date: "11-31-2017", end: "5-31-2025", rec: 'weekly' },
      { item: "biWeekly", date: "11-31-2017", end: "5-31-2025", rec: 'biWeekly' }
    ]
    ```

### Accepts Functions
  **clickDay** 
  what happens when you click a day, callback is object containing date info
  **clickEvent**
  what happens when you click an event, callback is object containing date info
  **clickThisDate**
  what happens when you click this date, callback, new date and old date info
  **clickPrev**
  what happens when you click prev date, callback, new date and old date info
  **clickNext**
  what happens when you click next date, callback, new date and old date info
