import React from 'react'
import StudentIdCard from '../../components/StudentIdCard/StudentIdCard'

const studentIdCard = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <StudentIdCard/>
        <StudentIdCard/>
        <StudentIdCard/>
        <StudentIdCard/>

    </div>
  )
}

export default studentIdCard