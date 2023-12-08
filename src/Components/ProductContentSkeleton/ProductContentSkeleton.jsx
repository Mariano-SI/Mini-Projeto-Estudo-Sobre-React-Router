import React from 'react'
import Skeleton from 'react-loading-skeleton'


const ProductContentSkeleton = () => {
  return (
    <>
        <p style={{fontSize:'700px',  margin:'0px'}}><Skeleton/></p>
        <div>
            <div style={{fontSize:'50px', marginTop:'45px', width:'70%'}}>
                <Skeleton/>
            </div>
            <div style={{fontSize:'70px', marginTop:'0px', width:'80%'}}>
                <Skeleton/>
            </div>

        </div>
    </>
  )
}

export default ProductContentSkeleton