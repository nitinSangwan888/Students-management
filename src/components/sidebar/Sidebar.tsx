import React from 'react'
import { IoIosSpeedometer } from 'react-icons/io';
import { BsLaptop } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { LiaTableSolid } from 'react-icons/lia';
import {BiBarChartSquare} from'react-icons/bi'

import styles from './Sidebar.module.css'
const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarWrapperone}>
      <h1>Ashoka</h1>
      </div>
     
      <div className={styles.sidebarWrapperone }>
        <IoIosSpeedometer/>
<h1>Dashboard</h1>
      </div>
<div className={styles.sidebarWrapperone}>
<BsLaptop/>
<h1>Elements</h1>

</div>
<div className={styles.sidebarWrapperone}>
  <MdWidgets/>
<h1>Widgets</h1>

</div>
<div className={styles.sidebarWrapperone}>
<FaWpforms/>
<h1>Forms</h1>
</div>

<div className='sidebarWrapperone'>
<LiaTableSolid/>
<h1>Tables</h1>
</div>

<div className='sidebarWrapperone'>
<BiBarChartSquare/>
<h1>charts</h1>
</div>

    </div>
  )
}

export default Sidebar