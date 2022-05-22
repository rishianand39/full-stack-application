import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  ${mobile({padding:"10px 0"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  text-align: center;
  flex: 1;
  ${mobile({fontSize:"14px"})}
`;
const Right = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
  ${mobile({ justifyContent :"start"})}
`;

const Language = styled.div`
  font-size: 14px;
  margin-right: 5px;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;

`;
const Input = styled.input`
  outline: none;
  border: none;
  ${mobile({width:"98%"})}
`;

const Logo = styled.div`
  flex: 1;
  font-weight: bolder;
`;

const MenuItem = styled.div`
margin-left: 25px;
${mobile({fontSize:"14px",marginLeft:"10px"})}
`;

const Navbar = () => {
  const quantity =useSelector(state=>state.cart.quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="select languages"/>
            <SearchIcon style={{fontSize:"16px",color:"grey"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>RISHI.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/carts">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
