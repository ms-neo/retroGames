import styled from "styled-components";

export const Container =styled.div`
position : fixed ;
width:80%;
height:90%;
background-color:#000;
display:flex;
justify-content:center;
align-items:center;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
// display :none;
background:#fff;
margin:0;
padding:0;
.content{
    position:relative;
    height:100%;
}
`

export const PopupInner = styled.div`
position:relative;
margin:0;
`

export const SubContainer = styled.div`


background:#ddd;
width:100%;
height:100%;
display:grid;
grid-template-columns:1fr 1fr;
background:#222;

`

export const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;


`

export const Form = styled.form`
width:100%;
display:grid;
grid-template-columns: 1fr;
gap:3vh;
`

export const FormWrapper = styled.div`
padding :5vh 6vh;
margin-top:8vh;
input{
    margin-top:1.5vh;
    background-color:#3D4646;
    width:80%;
    height:35px;
    border-radius:1vh;
    box-shadow:none;
    border:none;
}
button{
    // margin-top:3vh;
    height:35px;
}

p{
    margin:1vh;
}
`
export const Close = styled.button`
display:flex;
justify-content:end;
font-size:1.5rem;
color:#000;
position:absolute;
top:5vh;
right:5vh;
z-index:100;
cursor:pointer;
`
