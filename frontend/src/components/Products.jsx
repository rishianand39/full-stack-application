import { useEffect, useState } from "react";
import styled from "styled-components";
import {popularProducts} from "../data"
import Product from "./Product"
import axios from "axios"

const Container=styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Products = ({category,filters,sort}) => {
  const [products,setProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])

  // FETCHING PRODUCTS WITH AND WITHOUT CATEGORY
  useEffect(()=>{
    const getProducts=async()=>{
      try {
        const result=await axios.get(category?`http://localhost:5000/api/products?category=${category}`:`http://localhost:5000/api/products`)
        setProducts(result.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  },[category])

  // useEffect(()=>{
  //   let f=products.filter((item)=>
  //     Object.entries(filters).every((key,value)=>
  //     item[key].includes(value)
  //     )
  //   )

  // },[filters])


  return (
    <Container>
      {popularProducts.map(item=>(
        <Product item={item}/>
      ))}
    </Container>
  )
}

export default Products