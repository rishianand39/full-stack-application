import styled from "styled-components";
import {popularProducts} from "../data"
import Product from "./Product"

const Container=styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Products = ({category,filters,sort}) => {
  console.log(category,filters,sort)
  return (
    <Container>
      {popularProducts.map(item=>(
        <Product item={item}/>
      ))}
    </Container>
  )
}

export default Products