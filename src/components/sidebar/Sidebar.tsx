
import { IoIosSpeedometer } from 'react-icons/io';
import { BsLaptop } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { LiaTableSolid } from 'react-icons/lia';
import {BiBarChartSquare} from'react-icons/bi'
import {MdRestorePage} from'react-icons/md'
import styles from './Sidebar.module.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
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
      <div className={styles.sidebarWrapperone}>
        <img src="ashoka white.png" alt="" />
     
      </div>

      <div  className={styles.adminWrapper}>
        <div className={styles.adminWrapperimage}>
        <Stack direction="row" spacing={3}>
     
     <Avatar alt="Travis Howard" src="image 50.png" />
     
   </Stack>
        </div>
   
<div className={styles.adminWrapperDetails}>
<h1>Nitin Choudhary</h1>
<p>Admin</p>
</div>

      </div>
     
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