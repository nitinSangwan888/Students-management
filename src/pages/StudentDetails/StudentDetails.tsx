import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetails = () => {
    const {Id}=useParams()
    console.log(Id)
  return (
    <div>StudentDetails</div>
  )
}

export default StudentDetails