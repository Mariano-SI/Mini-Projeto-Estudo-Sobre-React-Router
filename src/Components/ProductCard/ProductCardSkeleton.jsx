import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductCardSkeleton = () => {
  return (
    <div>
        <div><Skeleton height={288}/></div>
        <h1 style={{margin:'8px 0px', width:'65%'}}><Skeleton/></h1>
    </div>
  )
}

export default ProductCardSkeleton