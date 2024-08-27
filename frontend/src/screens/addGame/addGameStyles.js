import styled from "styled-components";


export const Container = styled.div`
margin:5vh 10vh ;

`

export const SubContainer = styled.div`
width:1000px;
padding :5vh;
display:grid;
grid-template-columns:1fr 1fr ;
grid-gap:10vh;
input , p{
    display:flex;
    align-items:center;
    margin:0.5vh 3vh 3vh 0;
   padding:.2vh 2vh ;
    background-color:#3D4646;
    width:100%;
    height:45px;
    border:none;
    border-radius:1vh;
    video{
width:100px;
    }
}

`

export const Form = styled.form`
display:flex;
flex-direction:column;
grid-gap:3vh;

`
