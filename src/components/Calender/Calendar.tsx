import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function CalendarData() {
  return (
    <div style={{ backgroundColor: "#191C24", color: "white",width:"32%"}}>
    
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{
            calendarWeekNumberHeaderText: '#',
            calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
          }}
        >
          <DateCalendar displayWeekNumber />
        </LocalizationProvider>
      
    </div>
  );
}
