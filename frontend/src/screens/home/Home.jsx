
import { useEffect,useState} from "react"
import { Link } from "react-router-dom"
import Cards from "../gamesCards/Cards.jsx"
import Hero from "../hero/Hero.jsx"
import Search from "../search/Search.jsx"
import Sidebar from "../sidebar/Sidebar.jsx"
import { AddGamesWRapper, Container, HomeContainer, LoginWrapper, MidSection } from "./homeStyles.js"
import AuthContainer from "../auth/AuthContainer.jsx"
import marioJumping from '../../assets/mario-jumping.png'
import pacman from '../../assets/pacman.png'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/features/authSlice.js"



const Home = () => {

const [cards, setCards] = useState([])
// console.log(cards,'cards home')
 const dispatch = useDispatch()
 const {admin} = useSelector(state=>state.admin)
 const {games} = useSelector(state=>state.games)
//  let searched = [];
//  console.log(admin,'admin')
//  console.log(games,'games')
const [isOpend, setIsOpend] = useState(false)

const handleClick =(e)=>{
  setIsOpend(true)
}

useEffect(() => {
// console.log(cards.length,'l')
//   if (cards.length === 0 ){
//     dispatch(getGames())
//   } else {
//     console.log(cards.length,'false')
//   // if cards is not empty then we need to craete ne array with the searched games
//   // so we can display it here
//   games.map(game=>
//     cards.map(card=>{
//       if (card === game.name){
//      searched.push(game)
//       }
//     }))
//     console.log(searched,'sss')
//   }


}, [dispatch])

const handleLogout =()=>{
  dispatch(logout())
}

  return (
    <HomeContainer>
    <Container>
    <Sidebar/>
    <Hero/>
    </Container>

    <MidSection> 
    <AddGamesWRapper>
    
    {admin && (
    <Link to={'/add-game'}>
      <div className="game-wrapper">
      <img src={pacman} width="30%"/>
      <p>Add Game</p>
      </div>
      </Link>)
}
    </AddGamesWRapper>
    <Search games={games} setCards={setCards}/>
    <LoginWrapper>
      {/* <img src={RetroImg} width="100%"/> */}
    
    {!admin ?  (<h3
    onClick={handleClick}>
      <img src={marioJumping} width="40%"/>
  </h3>) :(<div>
    <h1>Jeffrey</h1> 
    <p onClick={handleLogout}>Logout</p>
  </div>)
   }
  
  
    {!admin && (<div
    style={{display: !isOpend? 'none' : 'block'}}>
      {/* <Close onClick={handleClose}>X</Close> */}
      <AuthContainer setIsOpend={setIsOpend}/>
    </div>)}
    </LoginWrapper>

    </MidSection>
  
    <Cards games={games} cards={cards} setCards={setCards}/>
   </HomeContainer>
  )
}

export default Home