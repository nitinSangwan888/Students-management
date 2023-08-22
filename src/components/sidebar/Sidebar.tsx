
import { IoIosSpeedometer } from 'react-icons/io';
import { BsLaptop } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { LiaTableSolid } from 'react-icons/lia';
import {BiBarChartSquare} from'react-icons/bi'
import {MdRestorePage} from'react-icons/md'
import styles from './Sidebar.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
const [isactive, setActive] = useState(0)
const navigate = useNavigate()
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
    url:"/home"


  },

  {
    title:"Forms",
    icon:<FaWpforms/>,
    url:"/home"


  },
  {
    title:"Tables",
    icon:<LiaTableSolid/>,
    url:"/home"


  },
  {
    title:"Charts",
    icon:<BiBarChartSquare/>,
    url:"/home"


  },
  {
    title:"Pages",
    icon:<MdRestorePage/>,
    url:"/home"


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
return <div className={`${styles.sideLinksWrapper} ${isactive==index ? styles.active : ""}`} key={index} 
onClick={()=>{
  setActive(index)
  navigate(item.url)
}}
>
  <button style={{backgroundColor:isactive==index?`var(--light)`:"",color:isactive==index?`var(--text)`:""}}    >{item.icon}</button>
  <span style={{color:isactive==index?`var(--text)`:""}}  >    {item.title}</span>
</div>
 })
}
</div>

    </div>
  )
}

export default Sidebar