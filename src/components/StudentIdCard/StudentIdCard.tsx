
// import { StudentEntity } from '../../../interface/interface'
import styles from './StudentIdCard.module.css'
const StudentIdCard = (props:any) => {
   const {item}=props
  return (
    <div className={styles.StudentIdCardWrapper}>  
     
        <div className={styles.studendHading}>
            <img src='/ashoka-white.png' alt="" width={40} height={30} />
        </div>
        <div className={styles.studentProfile}>
            <div className={styles.studentImage}>

            <img  src={item.photo}alt="" width={100} height={90} />
            <h1>{item.name}</h1>
            </div>
            
            <div className={styles.sameProfile}>
            <div  className={styles.sameStudentContaint}>
                <h1>Id No</h1>
                <h1>{item.batchId}</h1>
            </div>
            <div  className={styles.sameStudentContaint}>
                <h1>email</h1>
                <h1>{item.email}</h1>
            </div><div  className={styles.sameStudentContaint}>
                <h1>course</h1>
                <h1>{item.course}</h1>
            </div><div  className={styles.sameStudentContaint}>
                <h1>Phone</h1>
                <h1>{item.phone}</h1>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default StudentIdCard