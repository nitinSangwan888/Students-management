// import Recharts from '../../components/Recharts/Recharts'

import CalendarData from "../../components/Calender/Calendar";
import Massege from "../../components/Calender/Massege/Massege";
import { chart } from "../../components/Recharts/Recharts";
import { SaleDetails } from "../../components/SaleDetails/SaleDetails";

import TableData from "../../components/Table/TableData";
import styles from "./Home.module.css";
// import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div className={styles.HomeWrapper}>
      <div className={styles.DetailsWrapper}>
        {SaleDetails.map((item: any, index) => {
          return (
            <div className={styles.cardDetails} key={index}>
              <h1>{item.component}</h1>
              <div>
                <p>{item.title}</p>
                <h3>{item.state}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.ChartsWrapper}>
        {chart.map((item, index) => {
          return (
            <div className={styles.chartContainer} key={index}>
              <div className={styles.ChartHeading}>
                <p>{item.title}</p>
                <button>{item.button}</button>
              </div>
              <div>{item.recharts}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.TableWrapper}>
        <div className={styles.TableContainer}>
          <div className={styles.TableHading}>
            <h1>Recent Salse</h1>
            <button>Show All</button>
          </div>

          <TableData />
        </div>
      </div>
      <div className={styles.CalendarWrapper}>
        <div className={styles.CalendarContainer}>
          <CalendarData />
        </div>
        <div className={styles.CalendarContainer}>
          <Massege />
        </div>
        <div className={styles.CalendarContainer}>
          <Massege />
        </div>
      </div>

      <div className={styles.footerWrapper}>
        <div className={styles.footerDetails}>
          <h1>Ashoka</h1> <span>, All Right CopyRight 2023</span>
        </div>
        <div className={styles.footercopyRight}>
          <span>MorganDynamices</span> <h1> Designed By </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
