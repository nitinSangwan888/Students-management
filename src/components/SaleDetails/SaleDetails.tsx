import { FaChartArea, FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa'

export const  SaleDetails=[{
    title:'Today Sale',
    state:"$1234",
    component:<FaChartLine/>
    
    },{
      title:'Totale Sale',
    state:"$1234",
    component:<FaChartBar/>
    
    }
    ,{
      title:'Today Revenue',
    state:"$1234",
    component:<FaChartArea/>
    
    }
    ,{
      title:'Totale Revenue',
    state:"$1234",
    component:<FaChartPie  />
    
    }]