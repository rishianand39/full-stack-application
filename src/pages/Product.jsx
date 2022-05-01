import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Remove } from "@mui/icons-material"
import { Add } from "@mui/icons-material"
import {mobile} from "../responsive"

const Container=styled.div`
    
`;
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection:"column",padding:"5px"})}
`;
const ImgContainer=styled.div`
    flex: 1;
`
const Image=styled.img`
    width: 100%;
    object-fit: cover;
    ${mobile({height:"60vh"})}
`;
const InfoContainer=styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding:"0 10px"})}
`;
const Title=styled.h1`
    font-weight: 200;
`;
const Desc=styled.p`
margin: 20px 0px;
    
`;

const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer=styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}

`;

const Filter=styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle=styled.div`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;

const FilterSize=styled.select`
    margin-left:10px;
    padding: 5px;
    ${mobile({padding:"2px 8px"})}

`;

const FilterSizeOption=styled.option`
    
`;

const AddContainer=styled.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({justifyConten:"space-between",width:"100%"})}
`
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`;

const Button=styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
&:hover{
      background-color: #f8f4f4;
  }
  ${mobile()}
`;



const Product = () => {
  return (
   <Container>
       <Navbar/>
       <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jensiuns</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, provident mollitia aliquid corrupti ad incidunt. Esse doloribus possimus dicta voluptatibus earum itaque soluta, reiciendis quasi nostrum nam, ipsa maiores tenetur?</Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
       <Newsletter />
       <Footer />
   </Container>
  )
}

export default Product