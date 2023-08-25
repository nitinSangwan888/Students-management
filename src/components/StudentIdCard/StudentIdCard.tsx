import React from 'react'
import styles from './StudentIdCard.module.css'
const StudentIdCard = () => {
  return (
    <div className={styles.StudentIdCardWrapper}>  
     
        <div className={styles.studendHading}>
            <img src="/ashoka-white.png" alt="" width={40} height={30} />
        </div>
        <div className={styles.studentProfile}>
            <div className={styles.studentImage}>

            <img src="/image-50.png" alt="" width={100} height={90} />
            <h1>Morgan Thakur</h1>
            </div>
            
            <div className={styles.sameProfile}>
            <div  className={styles.sameStudentContaint}>
                <h1>ID NO</h1>
                <h1>0000000</h1>
            </div>
            <div  className={styles.sameStudentContaint}>
                <h1>DOB</h1>
                <h1>MM/DD/YEAR</h1>
            </div><div  className={styles.sameStudentContaint}>
                <h1>Email</h1>
                <h1>Your Email</h1>
            </div><div  className={styles.sameStudentContaint}>
                <h1>Phone</h1>
                <h1>+00 000 000 00</h1>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default StudentIdCard