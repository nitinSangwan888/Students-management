import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage/NoPage';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Set up your top-level route */}
          <Route path="/" element={<Login />}/>
            {/* Set up child routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Layout />} >

            {/* Define an index route */}
            <Route index element={<Home />} />
            {/* Define a catch-all route for unknown paths */}
            <Route path="*" element={<NoPage />} />
            </Route>
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
