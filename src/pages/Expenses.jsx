import React, {  useEffect, useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addExpenseApi, deleteExpenseApi, getExpenseApi } from "../services/allApi";

function Expenses({setDataForChart}) {
  const [showModal, setShowModal] = useState(false);
  const [expenseStatus, setExpenseStatus] = useState([]);
  const [deleteStatus,setDeleteStatus] = useState([])
  const [expenses,setExpenses] = useState([])
  const [newExpense, setNewExpense] = useState({ category: "", amount: "", date: "" });
  const [loginId,setLoginId]=useState("")
  useEffect(() => {
    const storedLoginId = localStorage.getItem("loginId");
    if (storedLoginId) {
      setLoginId(storedLoginId); // Set the loginId if it exists
    }
  }, []);
  

  // Handle input changes
  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  // Open and close modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setNewExpense({ category: "", amount: "", date: "" }); // Reset form
  };


  // Add expense (Temporary UI update)
  const handleAddExpense = async () => {
    const {category,amount,date} = newExpense
    if(!category||!amount||!date){
      toast.warning('Fill in all the fields')


    }
    else{
      try{
        const reqBody = {
          category,
          amount,
          date,
          loginId
        }
        
        const result = await addExpenseApi(reqBody);
        // console.log(result)
        if(result.status>=200&&result.status<300){
          toast.success('Expense Added Successfully')
          setExpenseStatus(result)
          handleClose()
        }
        else{
          toast.error('Something went wrong')
        }
  
      }catch(error){
        toast.error('Something went wrong')
  
      }
    }

   
  
  };

  const getExpenses = async ()=>{
   try{
    const result = await getExpenseApi();
   console.log(result)
    if(result.status>=200&&result.status<300){
     
      console.log( result.data.filter(item=>item.loginId==loginId))
      setExpenses( result.data.filter(item=>item.loginId==loginId))
    

    }else{
      toast.error('Something went wrong')
    }
   }catch(error){
    toast.error('Something went wrong')
   }

  }

  const handleDelete = async (id)=>{
   try{
    const result = await deleteExpenseApi(id)
  
    if(result.status>=200&&result.status<300){
      setDeleteStatus(result)
      toast.success('Expense Deleted Successfully')

    }
    else{
      toast.error('Something went wrong')
    }
   }catch(error){
    toast.error('Something went wrong')
   }

    // console.log(result)


  }

  
  console.log(loginId)
  useEffect(()=>{
    if(loginId)
  
    getExpenses()


  },[loginId,expenseStatus,deleteStatus])

  useEffect(()=>{
   

    setDataForChart(expenses)

  },[expenses])


 



  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center fw-bold">Expenses</h2>

      {/* Add Expense Button */}
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={handleShow}>
          + Add Expense
        </Button>
      </div>

      {/* Expenses Table */}
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Amount (₹)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No expenses added yet.</td>
            </tr>
          ) : (
            expenses.map((expense,index) => (
              <tr key={expense.id}>
                <td>{index+1}</td>
                <td>{expense.category}</td>
                <td>₹{expense.amount}</td>
                <td>{expense.date}</td>
                <td>
                  {/* <Button variant="warning" size="sm" className="me-2">
                    Edit
                  </Button> */}
                  <Button onClick={()=>handleDelete(expense.id)} variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Modal Form for Adding Expense */}
      <Modal show={showModal} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={newExpense.category}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                name="amount"
                value={newExpense.amount}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={newExpense.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddExpense}>
            Add Expense
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />
    </div>
  );
}

export default Expenses;
