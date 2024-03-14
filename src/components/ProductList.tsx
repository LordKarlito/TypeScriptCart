import React, { ReactElement } from 'react'
import useCart from '../hooks/useCart'
import useProducts from '../hooks/UseProducts'
import Product from './Product'

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart} = useCart()
    const { products } = useProducts()

    let pageContent: ReactElement | ReactElement[] = <p>Loading ...</p>

    if (products ?.length) {
        pageContent = products.map(product => {
            const inCart: boolean = cart.some(item => item.id == product.id)

            return (
                <Product 
                    key = {product.id} 
                    product={product} 
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS} 
                    inCart={inCart}></Product>
            )
        })
    }

    const content = (
        <main className="main main--products">
            {pageContent}
        </main>
    )
  return content;
}

export default ProductList