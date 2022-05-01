import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import {mobile} from "../responsive"

const Container=styled.div`
    
`
const Wrapper=styled.div`

`;
const Title=styled.h1`
   font-weight :300 ;
   text-align: center;
`;
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 20px;
`;
const TopBottom=styled.button`
   padding:10px;
   font-weight :600 ;
   cursor: pointer;
   border: ${props=>props.type==="filled" && "none"};
   background-color: ${props=>props.type==="filled" ? "black" :"transparent"};
   color: ${props=>props.type==="filled" && "white"};
   
`;
const TopTexts=styled.div`
    ${mobile({display:"none"})}
`;
const TopText=styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;
const Info=styled.div`
    flex: 3;
`;

const Product=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const ProductDetail=styled.div`
    flex: 2;
    display: flex;
`;
const Image=styled.img`
    width: 200px;
    height: 200px;
`;
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName=styled.span`
    
`;
const ProductId=styled.span`
    
`;
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid;
    background-color: ${props=>props.color};
`;

const ProductSize=styled.span`
    
`;
const PriceDetail=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mobile({marginTop:"10px"})}
`;

const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom:20px ;

`;
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:"5px 15px"})}
`;
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200px;
`;
const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 5px 0;
`

const Summary=styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle=styled.h1`
    font-weight: 200;

`;

const SummaryItem=styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "900"};
    font-size: ${props=>props.type==="total" && "24px"};
`;

const SummaryItemText=styled.span`
    
`;
const SummaryItemPrice=styled.span`
    
`;

const Button=styled.button`
  width:100%;  
  padding: 10px;
  background-color: black;
  color:white;
  font-weight: 800;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopBottom>CONTINUE SHOPPING</TopBottom>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopBottom type="filled">CHECKOUT NOW</TopBottom>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17350962/2022/3/9/0a8fd2f3-daca-4861-849d-a18c21fb41bb1646825753269-Puma-Men-Sports-Shoes-8831646825752908-1.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER</ProductName>
                                <ProductId><b>ID:</b> 123457775</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17350962/2022/3/9/0a8fd2f3-daca-4861-849d-a18c21fb41bb1646825753269-Puma-Men-Sports-Shoes-8831646825752908-1.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER</ProductName>
                                <ProductId><b>ID:</b> 123457775</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$3.5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart