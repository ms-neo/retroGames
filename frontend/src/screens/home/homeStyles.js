import styled from "styled-components";

export const HomeContainer = styled.div`
// padding:10px;
overflow:hidden;

`
export const Container = styled.div`

display:grid;
grid-template-columns:20% 60% 25% ;

`

export const MidSection = styled.div`
grid-gap:2vh;
margin-top:4vh;
align-items:center;
display:grid;
grid-template-columns:repeat(3,1fr) ;
`
export const LoginWrapper = styled.div`
padding:0 5vh;
text-align:center;
h1{
  font-size:1.5rem;
  margin:0;
  padding:0;
}
`

export const AddGamesWRapper = styled.div`
// text-align:center;
a{
    text-decoration:none;
    // font-size:1.4rem;
    color:#fff;
    // text-align: center;
}
img{
  
    object-fit:contain;
    // padding-top:5vh;
    // width:15%;
    margin:-3vh 0;
}
.game-wrapper{
//    background-color:#ddd;
  text-align:center;
  text-align: center;

}
`
