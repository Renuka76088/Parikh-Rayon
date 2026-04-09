import React from 'react'
import Header from '../Home/Header'
import HeroSlider from '../Home/HeroSlider'
import ContactSection from '../Home/ContactSection'
import BlogSection from '../Home/BlogSection'
import ProductSection from '../Home/ProductSection'
import AboutSection from '../Home/AboutSection'
import BannerSection from '../Home/BannerSection'


import '../vendor/bootstrap/css/bootstrap.min.css'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../fonts/iconic/css/material-design-iconic-font.min.css'
import '../fonts/linearicons-v1.0.0/icon-font.min.css'
import '../vendor/animate/animate.css'
import '../vendor/css-hamburgers/hamburgers.min.css'
import '../vendor/animsition/css/animsition.min.css'
import '../vendor/select2/select2.min.css'
import '../vendor/daterangepicker/daterangepicker.css'
import '../vendor/slick/slick.css'
import '../vendor/MagnificPopup/magnific-popup.css'
import '../vendor/perfect-scrollbar/perfect-scrollbar.css'
import '../Pages/util.css'
import '../Pages/main.css'

function Index() {
  return (
    <>
    
      <HeroSlider />
      <BannerSection />
      <AboutSection />
      <ProductSection />
      <BlogSection />
      <ContactSection />
   
    </>
  )
}

export default Index