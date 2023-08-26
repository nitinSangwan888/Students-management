import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRegisterUserMutation } from '../../../redux/StudentApi/userApi';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



  
  
  const defaultTheme = createTheme();

const Register = () => {
  const navigate = useNavigate()

  const [registerUserApi] = useRegisterUserMutation();
 
  const changeHandaler=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setregister({...register,[e.target.name]:e.target.value})
  }
  const [register, setregister] = 
  React.useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  
  });

    const handleSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
   try {
       
    const data = new FormData();
    for (const [key, value] of Object.entries(register)) {
  data.append(key, value);
}

  const response =   await registerUserApi(data);

  if(response?.data?.success){
    toast.success(response?.data?.message)
    localStorage.setItem("studentToken",response?.data?.token)
    navigate('/home')
    }else{
    toast.error(response.error.data.message)
    // console.log(response.error.data.message)
    }
   } catch (error) {
    console.log(error)
   }

           
      };
  return (
    <div>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                 onChange={changeHandaler}
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="Name"
                  label=" Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 onChange={changeHandaler}
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={changeHandaler}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={changeHandaler}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="remember me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    <Toaster    />

    </div>
  )
}

export default Register