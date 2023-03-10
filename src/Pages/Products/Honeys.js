import React from 'react'
import imageHeader from '../../Assets/slider3-bg.webp'
import HeaderAll from '../../Components/HeaderAll'
import ProductItem from '../../Components/ProductItem'
import Section from '../../Components/Section'
import productList from '../../Data/productList'

export default function Honeys() {
  return (
    <>
        <HeaderAll imageUrl={imageHeader}>
            মধু সমূহ
        </HeaderAll>
        <Section classSec={'sec-p'} container="container">
            <div className='mb-5'>
              <h1 className='fw-bold text-center text-warning mb-3'>মধুর গুনাগুণ </h1>
              <p className='fs-4 text-center'>আপনার শরীরকে সুস্থ ও পুষ্টিকর রাখতে আমাদের কাছে পাচ্ছেন সুন্দরবনের প্রাকৃতিক চাকের খাঁটি মধু  যেটা আপনাকে হাঁচি, কাশি, ও করোনা জাতীয় মহামারীর সংক্রমণ থেকে নিরাপদ রাখতে সহায়তা করবে,</p>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {productList.map(product=>{
                if(product.type == 'Honey'){
                  return <ProductItem key={product.id} {...product}/>
                }
              })}
            </div>
        </Section>
    </>
  )
}
