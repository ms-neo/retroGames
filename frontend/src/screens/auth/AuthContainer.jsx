
import { useLocation } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import { Close, Container } from "./authStyles"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { getAdmin } from "../../redux/features/authSlice"


const AuthContainer = ({setIsOpend}) => {

  const dispatch = useDispatch()
  const {admin} = useSelector(state => state.admin)
  const [clicked  , setIsClicked  ] = useState(false)
  const location =useLocation()
  // console.log(location.pathname)

  const handleClose =()=>{
   
    // to be able to close the popup
    setIsOpend(false)
    // to reset the vluse so eveytime we will open the popup it will open login comp
    setIsClicked(false)
  }

  useEffect(() => { 
    // console.log(admin._id,'iddd')
if (admin){
 
//  setIsOpend(false)
}
   
  }, [dispatch])
  
 
  const handleClick =(e)=>{
    // e.preventDefault()

    setIsClicked(!clicked)
  }

  return (
    <Container>
      {!clicked ?
    (<div className="content">
    <Close onClick={handleClose} >X</Close> 
    <Login handleClick={handleClick} />
    </div>) :
    (<div className="content">
    <Close onClick={handleClose} >X</Close> 
    <Signup handleClick={handleClick}  />
    </div>)
}
   
    </Container>
  )
}

export default AuthContainer