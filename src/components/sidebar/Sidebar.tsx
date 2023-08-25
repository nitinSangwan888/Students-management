
import { IoIosSpeedometer } from 'react-icons/io';
import { BsLaptop } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { LiaTableSolid } from 'react-icons/lia';
import {BiBarChartSquare} from'react-icons/bi'
import {MdRestorePage} from'react-icons/md'
import styles from './Sidebar.module.css'
// import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Sidebar = () => {
// const [isactive, setActive] = useState(0)
const navigate = useNavigate()
const location = useLocation()
const arr = [
  {
    title:"Dashboard",
    icon:<IoIosSpeedometer/>,
    url:"/home"
  },
  {
    title:"Students",
    icon:<BsLaptop/>,
    url:"/home/students"


  },
  {
    title:"Analytics",
    icon:<MdWidgets/>,
    url:"/home/analytics"


  },

  {
    title:"Forms",
    icon:<FaWpforms/>,
    url:"/home/forms"


  },
  {
    title:"Tables",
    icon:<LiaTableSolid/>,
    url:"/home/tables"


  },
  {
    title:"Charts",
    icon:<BiBarChartSquare/>,
    url:"/home/payments"


  },
  {
    title:"Pages",
    icon:<MdRestorePage/>,
    url:"/home/pages"


  }
]







  return (
    
    <div className={styles.sidebarWrapper}>
      
      <div className={styles.logo}>
            <img src="/ashoka-white.png" alt="" />
            </div>
     
     <div className={styles.linksWrapper}>

     
{
 arr.map((item,index)=>{
return <div className={`${styles.sideLinksWrapper} ${location.pathname==item.url? styles.active : ""}`} key={index} 
onClick={()=>{

  navigate(item.url)
}}
>
  <button style={{backgroundColor:location.pathname==item.url?`var(--light)`:"",color:location.pathname==item.url?`var(--text)`:""}}    >{item.icon}</button>
  <span style={{color:location.pathname==item.url?`var(--text)`:""}}  >    {item.title}</span>
</div>
 })
}
</div>

    </div>
  )
}

export default Sidebar