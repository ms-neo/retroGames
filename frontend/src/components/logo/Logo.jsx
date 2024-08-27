import { Container, LogoLine } from "./logoStyles"
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Container>
    <Link to='/'>
       <LogoLine>
        <img src={logo} />
        <h3>RETRO GAME</h3>
       </LogoLine>
       </Link>
  
    </Container>
 
  )
}

export default Logo