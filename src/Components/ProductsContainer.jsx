import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'
import { TinyDivider } from './TinyDivider/TinyDivider'

const ProductsContainer = () => {
    const {products} = useSelector((state) =>state.products)
  return (
    <div className='row'>
       <TinyDivider>Our Best Selling Products</TinyDivider>
        {products.map((item) =>{
            return <Product key={item.id} {...item} />
        })}
    </div>
  )
}

export default ProductsContainer