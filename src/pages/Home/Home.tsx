
// import Recharts from '../../components/Recharts/Recharts'

import CalendarData from '../../components/Calender/Calendar';
import  { chart } from '../../components/Recharts/Recharts'
import { SaleDetails } from '../../components/SaleDetails/SaleDetails'
import TableData from '../../components/Table/TableData'
import styles from './Home.module.css'
// import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div className={styles.HomeWrapper} >

<div className={styles.DetailsWrapper}>
{SaleDetails.map((item:any,index)=>{
  return <div className={styles.cardDetails} key={index}>
<h1>{item.component}</h1>
<div>
  <p>{item.title}</p>
  <h3>{item.state}</h3>
</div>
  </div>
})}

</div>

<div className={styles.ChartsWrapper}>
{chart.map((item,index)=>{
  return <div className={styles.chartContainer} key={index}>
    <div className={styles.ChartHeading}  >

<p>{item.title}</p>
<button >{item.button}</button>
    </div>
<div >
  {item.recharts}
</div>
  
    </div>
})}  
  
</div>
<div className={styles.TableWrapper}>
  
  <div className={styles.TableContainer}>
  <div className={styles.TableHading}>
    <h1>Recent Salse</h1>
    <button >Show All</button>
  </div>
  
  
  <TableData/>
  </div>
</div>
<div className={styles.CalendarWrapper}>
  <CalendarData/>
</div>

    </div>
  )
}

export default Home