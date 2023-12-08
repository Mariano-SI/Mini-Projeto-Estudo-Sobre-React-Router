import React from 'react'
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton'

const ProductsPageSkeleton = () => {

  return (
    <>
        {[...Array(9)].map((_, i) => <ProductCardSkeleton/>)}
    </>
  )
}

export default ProductsPageSkeleton