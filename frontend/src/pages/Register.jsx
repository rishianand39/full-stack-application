import styled from "styled-components";
import {mobile} from "../responsive"
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position:center ;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({paddingTop:"20px"})}

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
flex-wrap: wrap;

`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding:10px;
${mobile({margin:"15px 10px 0 0"})}
`;

const Agreement = styled.span`
 font-size: 14px;
 margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
    background-color: grey;
  }
`;

const Error=styled.span`
  color:red;
  margin:8px;
`


const Register = () => {
  const navigate=useNavigate()
  const [user,setUser]=useState({
    "username":"",
    "email":"",
    "password":"",
  })
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const handleClick=(e)=>{
    
    setUser({
      ...user,
     [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
   try {
     await axios.post("https://fullstackapprishi.herokuapp.com/api/auth/register",user)
    setError(false);
    setLoading(false);
    navigate("/login")
   } catch (error) {
     setLoading(false)
     setError(true)

   }
  }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>   
          <Input onChange={handleClick}  name="username" placeholder="username" type="text"/>
          <Input onChange={handleClick}  name="email" placeholder="email" type="email" />
          <Input onChange={handleClick}  name="password" placeholder="password" type="password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit} disabled={loading}>CREATE</Button>
          {error && <Error>Something Went Wrong....</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;