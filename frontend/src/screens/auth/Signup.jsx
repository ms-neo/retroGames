import { useEffect, useState } from "react"
import { Container, Form, FormWrapper, Image, SubContainer } from "./authStyles"
import Button from "../../components/button/Button"
import loginImage from '../../assets/login.png'
import { useDispatch } from "react-redux"
import { addAdmin, reset } from "../../redux/features/authSlice"

const Signup = ({handleClick}) => {

  const dispatch = useDispatch()

  const [dataForm , setDataForm ] = useState({
    adminName:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])
  

  const {adminName,email,password,confirmPassword}= dataForm

  const handleChange = (e) =>{
  console.log(e.target.value)
      setDataForm(prev=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
  }
  console.log(dataForm,'sata')

  const handleSubmit = (e) =>{
    e.preventDefault()
  if (password === confirmPassword){
    const signupForm = {
      adminName,
      email,
      password,
    }
    console.log(signupForm ,'sss')
    dispatch(addAdmin(signupForm))
  
  }
  dispatch(reset())
  }


  return (
  

 <SubContainer>
        <FormWrapper>
        <h1>Are you the owner ?</h1>
        <Form onSubmit={handleSubmit}>
          <div>
      <label>Enter a name: </label>
        <input
          type="text" 
          value={adminName}
          placeholder="name..."
          name="adminName"
          onChange={handleChange}
          required
        />
        </div>
        <div>
      <label>Enter your email: </label>
        <input
          type="email" 
          value={email}
          placeholder="email..."
          name="email"
          onChange={handleChange}
          required
        />
        </div>
        <div>
          <label>Enter your password: </label>
        <input
          type="password" 
          value={password}
          name="password"
          placeholder="password..."
          onChange={handleChange}
          required
        />
        </div>
        <div>
          <label>Confirm password: </label>
        <input
          type="password" 
          value={confirmPassword}
          name="confirmPassword"
          placeholder="confirm password..."
          onChange={handleChange}
          required
        />
        </div>
        <p onClick={handleClick}>login if it's your first time</p>
     <Button type='submit'>Sign Up</Button>
    </Form>
        </FormWrapper>
        <div>
        <Image src={loginImage}/>
        </div>
    </SubContainer>
   
        
  )
}

export default Signup