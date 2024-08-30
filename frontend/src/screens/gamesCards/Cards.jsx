import { useDispatch, useSelector } from "react-redux"
import { CardContainer, CardsContainer, Content, ImageWrapper } from "./cardStyles"
import { useNavigate } from "react-router-dom"
import { getGame, getGames, reset, searchedGames } from "../../redux/features/gamesSlice"
import { useEffect } from "react"
import Image from "../../components/image/Image"


const Cards = ({games,cards,setCards}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {newArr } = useSelector(state=> state.games)
  console.log(games,'games')
  console.log(newArr,'neee')
  console.log(cards,'cards')

console.log(games,'imag')
  // let searched = []



  useEffect(() => {
    console.log(cards.length,'l')
      if (cards.length === 0 ){
        dispatch(getGames())
      } else {
        console.log(cards.length,'false')
      dispatch(searchedGames(cards))
   
      }
// dispatch(reset())
    }, [dispatch,cards,getGames])

    console.log(games,'serrr')

  const handleClick =(gameId)=>{
    console.log(gameId,'id')
    // dispatch(getGame(gameId))
   navigate(`/games/${gameId}`)
  }

  return (
  
    <CardContainer>
            {cards.length === 0 ?
             games.map(game=>(
              <>
                <div key={game._id}>
        <CardsContainer onClick={()=>handleClick(game._id)} key={game._id}>
              
            <Content>
      <ImageWrapper>
              <Image src={game.image}/>
              </ImageWrapper>
              <div className="vr"></div>
            <div>
            <h3>{game.name}</h3>
            <p>platform</p>
            <p>price</p>
            <p>number of copies</p>
            <p>date of pruchase</p>
            </div>
            
            </Content>
         
        </CardsContainer>
        </div>
                  </>))
                  :      newArr.map(game=>(
                    <>
                      <div key={game._id}>
              <CardsContainer onClick={()=>handleClick(game._id)} >
                    
                  <Content key={game._id}>
            <ImageWrapper>
                    <img src={game.image}/>
                    </ImageWrapper>
                    <div className="vr"></div>
                  <div>
                  <h3>{game.name}</h3>
                  <p>platform</p>
                  <p>price</p>
                  <p>number of copies</p>
                  <p>date of pruchase</p>
                  </div>
                  
                  </Content>
               
              </CardsContainer>
              </div>
                        </>))     
               }
    </CardContainer>
     
        
  )
}

export default Cards