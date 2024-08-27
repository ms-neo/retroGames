import styled from 'styled-components'


export const Container = styled.div`
background:#1B2122;
border:1px solid #ddd;
// background:#ddd;
`

export const Image  =styled.img`
width:100%;
object-fit :cover;
height:55vh;
background:#ddd;
margin-bottom:-1vh;
transition: all 0.5s ease-out allow-discrete;


`

export const PlatContainer = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
justify-content:space-between;
align-items:center;
margin:0;

.plat{
    border-right:1px solid #ddd; 
    border-top:1px solid #ddd; 
    width:auto;
    height :40px;
    display:flex;
    justify-content: center;
    align-items:center;
    margin:0;
    padding:2vh;
}
&:hover .plat{
cursor:pointer;

// background-color:green;
}
.test{
    // background-color:green; 
    font-size:1.3rem;
    font-weight:bold;
    transition: all 0.5s ease-out allow-discrete;
}

`
export const Logos = styled.img`
width:30%;
object-fit: container;
background-size:cover;
`
