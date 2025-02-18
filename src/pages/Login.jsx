import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getRegisteredUserApi } from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const[enterLogin,setEnterLogin]=useState({
    loginUser:"",
    loginPass:""
  })

const navigate = useNavigate()
const handleClear = ()=>{
  setEnterLogin({
    loginUser:"",
    loginPass:""
  })
}
const handleLogin = async (e) => {
  e.preventDefault();
  const { loginUser, loginPass } = enterLogin;

  if (!loginUser || !loginPass) {
    toast.warning("Fill in all the fields");
    return;
  }

  try {
    const result = await getRegisteredUserApi();
    if (result.status >= 200 && result.status < 300) {
      const users = result.data; // Use directly instead of waiting for state update

      // Check if user exists
      const match = users.find((user) => user.email === loginUser && user.password === loginPass);
      console.log(match)
      
      
      if (match) {
       
        localStorage.setItem("loginId", match.id);
        
        toast.success("Login Successful");
        handleClear();
        setTimeout(() => {
          navigate("/display");
        }, 2000);
      } else {
        toast.error("Login Failed");
        handleClear();
      }
    } else {
      toast.error("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};


  // console.log(loginDetails);
  // console.log(enterLogin)
  
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "500px" }} className="p-4 shadow rounded-4">
        <h3 className="text-center mb-4">Login</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control value={enterLogin.loginUser} onChange={(e)=>setEnterLogin({...enterLogin,loginUser:e.target.value})} type="email" placeholder="Enter your email" className="rounded p-2" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control value={enterLogin.loginPass} onChange={(e)=>setEnterLogin({...enterLogin,loginPass:e.target.value})}  type="password" placeholder="Enter your password" className="rounded p-2"  required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 rounded" onClick={handleLogin}>Login</Button>
        </Form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to={'/register'} className="text-primary">Register</Link>
        </p>
      </Card>
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />

    </Container>
  );
};

export default Login;
