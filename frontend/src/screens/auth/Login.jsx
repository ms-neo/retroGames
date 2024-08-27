import {  Form, FormWrapper, Image, SubContainer } from "./authStyles"
import loginImage from '../../assets/login.png'
import {  useState } from "react"
import Button from "../../components/button/Button"
import { getAdmin, signin } from "../../redux/features/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Login = ({handleClick }) => {
  const dispatch =useDispatch()
  const nvigate =useNavigate()
  const {admin} = useSelector(state => state.admin)
  // to let the pop screen disapear 
    const [dataForm  , setDataForm  ] = useState({
      email:'',
      password:''
    })

      

const {email,password}= dataForm

    const handleChange = (e) =>{
      // console.log(e.target.value)
      e.preventDefault()
      setDataForm(prev=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
    }

    // retro-game@giske.nl
    const handleSubmit =(e)=>{
      // console.log(dataForm)
      e.preventDefault()
      const signinData = {
        email,
        password
      }
      // console.log(signinData,'sisn')
  
      dispatch(signin(signinData))
  
            console.log('te')
   
  
    }
    
  return (
  <SubContainer>
  
      <div>
      <Image src={loginImage}/>
      </div>

      <FormWrapper>
    
      <h1>Are you the owner ?</h1>
      <Form onSubmit={handleSubmit}>
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
      <p onClick={handleClick}>Register if it's your first time</p>
     
   <Button type="submit">Login</Button>
  </Form>
      </FormWrapper>
          </SubContainer>
       
  
  )
}

export default Login