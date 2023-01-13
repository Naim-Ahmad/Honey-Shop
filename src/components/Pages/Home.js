import React from "react";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Header from '../sections/Header';
import LatestProduct from "../sections/LatestProduct";
import Nav from '../sections/NavBar';
import ProductSection from "../sections/ProductSection";
import ReviewSec from '../sections/ReviewSec';

export default function Home(){
    return(
    <>
        <Nav />
        <Header/>
        <AboutSection />
        <ProductSection/>
        <LatestProduct />
        <ReviewSec />
        <ContactSection />
        <Footer/>
    </>    
    )
}