
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import './addStudent.css'

import { BeatLoader } from "react-spinners";

import { BiPencil, BiSolidUserCircle } from 'react-icons/bi';
import { useCreateStudentMutation } from '../../../redux/StudentApi/StudentApi';

  

const addStudent = () => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [previewImage, setPreviewImage] = React.useState<string | null>(null);
const [createStudentMutation, { isLoading, isError, isSuccess }] =
  useCreateStudentMutation();
  const [input, setInput] = 
  React.useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
    batchId: "",
    course: "",
    address: "",
    fees: "",
    
  
  });

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onloadend = () => {
            setPreviewImage(reader.result as string);
          };

          reader.readAsDataURL(file);
          setSelectedFile(file);
        }
  };

const changeHandaler=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
  setInput({...input,[e.target.name]:e.target.value})
}





  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{

    
    const data = new FormData();
    if (selectedFile) {
      data.append("photo", selectedFile);
    } else {
      return;
    }

    for (const [key, value] of Object.entries(input)) {
      data.append(key, value);
    }

      await createStudentMutation(data);

  }
   catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="StudentWrapper">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="StudentProfile">
            {previewImage && previewImage ? (
              <img src={previewImage} alt=""  />
            ) : (
              <>
                <button className='userBtn' >
                  <BiSolidUserCircle />
                </button>
              </>
            )}
            <input
              type="file"
              name="photo"
              id="photoid"
              onChange={handleSelectFile}
              style={{ display: "none" }}
            />
            <label htmlFor="photoid" className="btnIcon">
              <BiPencil />{" "}
            </label>
          </div>

          <Typography component="h1" variant="h5">
            AddStudents
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            className="boxMain"
          >
            <div className="studentContainer">
              <div className="studentcontainermain">
                <div className="studentContainerone">
                  <TextField
                    onChange={changeHandaler}
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

                <div className="studentContainertwo">
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

<TextField
                  fullWidth
                  onChange={changeHandaler}
                  name="batch"
                  label="batch"
                  type="batch"
                  id="batch"
                  autoComplete="batch"
                />

              </div>
            </div>

            <Button
              type="submit"

            
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              
              {isLoading ? <BeatLoader color="#36d7b7" /> : "Submit"}

        
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default addStudent