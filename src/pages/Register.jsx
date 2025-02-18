import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getRegisteredUserApi, registerUserApi } from "../services/allApi";

const Register = () => {
  const [userDetails,setUserDetails] = useState({
    username:"",
    email:"",
    password:""
  })
  const [getUsers,setGetUsers] = useState([])
  const handleClear = ()=>{
    setUserDetails({
      username:"",
      email:"",
      password:""
    })
  }
  
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userDetails;
  
    if (!username || !email || !password) {
      toast.warning("Fill in all the fields");
      return;
    }
  
    try {
      // Fetch registered users
      const resultReg = await getRegisteredUserApi();
      // console.log(resultReg);
  
      if (resultReg.status >= 200 && resultReg.status < 300) {
        const existingUsers = resultReg.data; // Use this directly
  
        // Check if email already exists
        const match = existingUsers.find(user => user.email === email);
  
        if (!match) {
          // Register user
          const result = await registerUserApi(userDetails);
          // console.log(result);
  
          if (result.status >= 200 && result.status < 300) {
            toast.success("Registered Successfully");
            setTimeout(() => navigate("/login"), 2000);
            handleClear();
          } else {
            toast.error("Registration Failed");
          }
        } else {
          toast.error("You are already registered");
          setTimeout(() => navigate("/login"), 2000);
          handleClear();
        }
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  
  // console.log(userDetails)
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "500px" }} className="p-4 shadow rounded-4">
        <h3 className="text-center mb-4">Register</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder="Enter your username" className="rounded p-2"  required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="email" placeholder="Enter your email" className="rounded p-2"  required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder="Enter your password" className="rounded p-2"  required />
          </Form.Group>
          <Button onClick={handleRegister} variant="primary" type="submit" className="w-100 rounded ">Register</Button>
        </Form>
        <p className="mt-3 text-center">
          Already have an account? <Link to={'/login'} className="text-primary">Login</Link>
        </p>
      </Card>
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />
    </Container>
    
  );
};

export default Register;
