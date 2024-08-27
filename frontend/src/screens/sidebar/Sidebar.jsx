import Logo from "../../components/logo/Logo"
import { SidebarContainer } from "./sidebarStyles"


const Sidebar = () => {
  return (
    <SidebarContainer>
    <Logo/>
    <div>Home</div>
    <div>Consoles</div>
    <div>All Games</div>
    <div>Retro Games</div>
    
    </SidebarContainer>
  )
}

export default Sidebar