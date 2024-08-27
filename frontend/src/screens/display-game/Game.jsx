import React, { useEffect } from 'react'
// import EditGame from '../addGame/EditGame'
import { useNavigate, useParams } from 'react-router-dom'
import { getGame } from '../../redux/features/gamesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CardContainer, CardsContainer, Content, ImageWrapper } from './gameStyle'
// import { CardContainer, ImageWrapper,Content, CardsContainer } from './gameStyle'

const Game = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {game}= useSelector(state=>state.games)
    const {id} = useParams()
 
    useEffect(() => {
      dispatch(getGame(id))
    }, [dispatch])
    
    const handleClick = () => {
     navigate('/edit-game')
    }

  return (
    <>
         <CardContainer>
                <div key={game._id}>
        <CardsContainer onClick={handleClick}>
            <Content>
      <ImageWrapper>
              <img src={`http://localhost:3000/${game.image}`}/>
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
    </CardContainer>
     
        <div onClick={handleClick}>Edit Game</div>
    </>

  )
}

export default Game