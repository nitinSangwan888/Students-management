
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Card from '@mui/material/Card';

import './Calendar.css'
export default function BasicDateCalendar() {
  return (
    <Card variant="outlined" sx={{backgroundColor:`var(--light)`,color:`var(--dark)`,width:"100%",height:"100%", marginTop:"5px"}}  >


    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />

    </LocalizationProvider>
    </Card>

  );
}