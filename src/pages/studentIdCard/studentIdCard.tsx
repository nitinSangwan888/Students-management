
import StudentIdCard from '../../components/StudentIdCard/StudentIdCard'
import { useGetAllStudentQuery } from '../../../redux/StudentApi/StudentApi'
import { StudentEntity } from '../../../interface/interface'
import styles from './studentCard.module.css'
const studentIdCard = () => {
  const { data } = useGetAllStudentQuery()
console.log(data)
  return (
    <div className={styles.studentCardWrapper} >
      {data?.data?.map((item:StudentEntity,index)=>{
        
        return <StudentIdCard item={item} key={index} />

      })

      }
       

    </div>
  )
}

export default studentIdCard