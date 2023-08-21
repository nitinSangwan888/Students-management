
import { IoIosSpeedometer } from 'react-icons/io';
import { BsLaptop } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { LiaTableSolid } from 'react-icons/lia';
import {BiBarChartSquare} from'react-icons/bi'
import {MdRestorePage} from'react-icons/md'
import styles from './Sidebar.module.css'

const Sidebar = () => {


const arr = [
  {
    title:"Dashboard",
    icon:<IoIosSpeedometer/>
  },
  {
    title:"Elements",
    icon:<BsLaptop/>

  },
  {
    title:"Widgets",
    icon:<MdWidgets/>

  },

  {
    title:"Forms",
    icon:<FaWpforms/>

  },
  {
    title:"Tables",
    icon:<LiaTableSolid/>

  },
  {
    title:"Charts",
    icon:<BiBarChartSquare/>

  },
  {
    title:"Pages",
    icon:<MdRestorePage/>

  }
]









  return (
    
    <div className={styles.sidebarWrapper}>
      

     
     
{
 arr.map((item,index)=>{
return <div className={styles.sidebarWrappertwo} key={index}>
  <button>{item.icon}</button>
  <h1>{item.title}</h1>
</div>
 })
}
    </div>
  )
}

export default Sidebar