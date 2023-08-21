
// import Recharts from '../../components/Recharts/Recharts'

import  { chart } from '../../components/Recharts/Recharts'
import { SaleDetails } from '../../components/SaleDetails/SaleDetails'
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.HomeWrapper} >

<div className={styles.DetailsWrapper}>
{SaleDetails.map((item:any)=>{
  return <div className={styles.cardDetails}>
<h1>{item.component}</h1>
<div>
  <p>{item.title}</p>
  <h3>{item.state}</h3>
</div>
  </div>
})}

</div>

<div className={styles.ChartsWrapper}>
{chart.map((item)=>{
  return <div className={styles.chartContainer}>
    <div className={styles.ChartHeading} >

<p>{item.title}</p>
<button>{item.button}</button>
    </div>
<div>
  {item.recharts}
</div>
  
    </div>
})}  
  
</div>


    </div>
  )
}

export default Home