import styled from "styled-components";

export const CardContainer = styled.div`
margin:6vh 7vh;
// border:1px solid #ddd;
// display:flex;
// justify-content:space-btween;
// align-items:center;
grid-gap:5vh;
display:grid;
grid-template-columns:1fr 1fr 1fr;
`

export const CardsContainer = styled.div`
border:1px solid #ddd;
width :400px;
height:260px;
display:flex;
cursor:pointer;

`
export const ImageWrapper = styled.div`
width:180px;
height:240px;

img{
    padding-left:1vh;
    width:100%;
    height:100%;
    object-fit:contain;
}
`

export const Content = styled.div`
display:flex;
align-items:center;
grid-gap:17px;
h3{
 margin-top:2vh;
}

p{
    margin-top:2vh;
}
.vr{
    display:flex;
align-items:centre;
    height:200px;
    width:1px;
    background:#D9D9D9;
    
}
`