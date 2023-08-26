
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
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../../redux/StudentApi/userApi';
import { loginResponse } from '../../../interface/interface';
import toast, { Toaster } from 'react-hot-toast';

  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();

const Login = () => {
  const [loginUserApi ] = useLoginUserMutation();
  const [login, setlogin] = 
  React.useState({
    
    email: "",
  
    password: "",
  
  });

 
  const navigate = useNavigate()
  const changeHandaler=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setlogin({...login,[e.target.name]:e.target.value})
  }
  const handleSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
try {
    
  const data = new FormData();
  for (const [key, value] of Object.entries(login)) {
data.append(key, value);
}

 const response:loginResponse =  await loginUserApi(data);
 console.log(response)
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={changeHandaler}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              onChange={changeHandaler}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link  href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default Login