import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage/NoPage';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AddStudent from './pages/addStudent/addStudent';
import Students from './pages/students/Students';
import StudentIdCard from './pages/studentIdCard/studentIdCard'
import Tables from './pages/Tables/Tables';
import Form from './pages/Forms/Form';
import Payments from './pages/Payments/Payments';
import Analytics from './pages/Analytics/Analytics';

import StudentDetails from './pages/StudentDetails/StudentDetails';
function App() {
  return (
    <div className='appWrapper'  >
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Login />}/>
        
            <Route path="/register" element={<Register />} />
          

            <Route path="/home" element={<Layout />} >

            
            <Route index element={<Home />} />
            <Route path="/home/add" element={<AddStudent />} /> 
            <Route path="/home/students" element={<Students />} /> 
            <Route path="/home/tables" element={<Tables />} />   
            <Route path="/home/forms" element={<Form />} />   
            <Route path="/home/payments" element={<Payments  />} /> 
            <Route path="/home/analytics" element={<Analytics />} />   
            <Route path="/home/studentIdCard" element={<StudentIdCard />} />   
            <Route path='/home/studentIdCard/:Id' element={<StudentDetails/>} />

            
            <Route path="*" element={<NoPage />} />
            </Route>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
