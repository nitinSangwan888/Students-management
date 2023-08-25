
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import './addStudent.css'
import { createStudentApi, useCreateStudentMutation } from '../../../redux/StudentApi/StudentApi';

import { BeatLoader } from "react-spinners";



const addStudent = () => {


  const [input, setInput] = 
  React.useState({
    photo: "",
    name: "",
    email: "",
    phone: "",
    batch: "",
    batchId: "",
    course: "",
    address: "",
    fees: "",
  
  
  });

const changeHandaler=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
  setInput({...input,[e.target.name]:e.target.value})
}
console.log(input)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
}
  return (
    <div className='StudentWrapper'>


      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1,height:"90px",width:"90px", }}>
            <div className='StudentProfile'>
            <img src="/image-50.png" alt="" style={{backgroundPosition:'center',backgroundSize:'cover'}}/>
            </div>
         
          </Avatar>
          <Typography component="h1" variant="h5">
            AddStudents
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}className='boxMain'>
            <div className='studentContainer'>
              <div className='studentcontainermain'>
<div className='studentContainerone'>
<TextField onChange={changeHandaler}
              margin="normal"
              required
              
              id="Name"
              label="Name"
              name="name"
              autoComplete="Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              onChange={changeHandaler}
              name="email"
              label="email"
              type="email"
              id="email"
              
            />
            <TextField
              margin="normal"
              required
              onChange={changeHandaler}
              name="batchId"
              label="Batchid"
              type="Batchid"
              id="Batchid"
              
            />


           
</div>

<div className='studentContainertwo'>
<TextField
              margin="normal"
              required
              onChange={changeHandaler}
              name="phone"
              label="Phone Number"
              type="Phone Number"
              id="Phone Number"
              
            />

<TextField
              margin="normal"
              required
              onChange={changeHandaler}
              name="fees"
              label="Fees"
              type="Fees"
              id="Fees"
              autoComplete="current-password"
            />
<TextField
              margin="normal"
              required
              onChange={changeHandaler}
              name="course"
              label="Course"
              type="Course"
              id="Course"
              autoComplete="current-password"
            />

</div>
</div>

<div>
            <TextField
              fullWidth
              onChange={changeHandaler}
              name="address"
              label="Address"
              type="Address"
              id="Address"
              autoComplete="current-password"
            />
            </div>
            </div>
        
           





            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
     
          </Box>
        </Box>
       
      </Container>


    </div>
  )
}

export default addStudent