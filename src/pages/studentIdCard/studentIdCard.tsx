
import StudentIdCard from '../../components/StudentIdCard/StudentIdCard'
import { useGetAllStudentQuery } from '../../../redux/StudentApi/StudentApi'
import { StudentEntity } from '../../../interface/interface'

const studentIdCard = () => {
  const { data } = useGetAllStudentQuery()
console.log(data)
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      {data?.data?.map((item:StudentEntity,index)=>{
        
        return <StudentIdCard item={item} key={index} />

      })

      }
       

    </div>
  )
}

export default studentIdCard