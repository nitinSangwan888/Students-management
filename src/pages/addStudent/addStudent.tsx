
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './addStudent.css'



const defaultTheme = createTheme();

const addStudent = () => {
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

<ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
<TextField
              margin="normal"
              required
              
              id="Name"
              label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              
              name="Batchid"
              label="Batchid"
              type="Batchid"
              id="password"
              autoComplete="current-password"
            />


           
</div>

<div className='studentContainertwo'>
<TextField
              margin="normal"
              required
              
              name="Phone Number"
              label="Phone Number"
              type="Phone Number"
              id="password"
              autoComplete="current-password"
            />

<TextField
              margin="normal"
              required
              
              name="Fees"
              label="Fees"
              type="Fees"
              id="Fees"
              autoComplete="current-password"
            />
<TextField
              margin="normal"
              required
              
              name="Course"
              label="Course"
              type="Course"
              id="Course"
              autoComplete="current-password"
            />

</div>
</div>

<div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="Address"
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
    </ThemeProvider>

    </div>
  )
}

export default addStudent