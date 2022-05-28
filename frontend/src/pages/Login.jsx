import { useState } from "react";
import styled from "styled-components"
import { login } from "../redux/apiCall";
import {mobile} from "../responsive"
import {useDispatch, useSelector} from "react-redux"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position:center ;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
background-color: white;
width: 40%;
padding: 20px;
${mobile({width:"80%"})}
`;

const Title = styled.h1`
font-size:24px ;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;

`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin:10px 0px;
padding:10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled{
    background-color:grey;
    color:"red";
    cursor: not-allowed;
  }

`;

const Error=styled.span`
  color:red;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const {isFetching,error}=useSelector((state)=>state.user)
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()

  const handleClick=(e)=>{
    e.preventDefault()
    login(dispatch,{username,password})
  }

  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
        <Input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
        <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
        {error && <Error>Something went wrong...</Error>}
        <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login