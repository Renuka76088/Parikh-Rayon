import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Footer from './Home/Footer'
import AboutPage from './Pages/AboutPage'
import Products from './Pages/Products'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import AppointmentForm from './Pages/AppointmentForm'
import Auction from './Pages/Auction'
import Career from './Pages/Career'
import Management from './Pages/Management'
import MediaGallery from './Pages/MediaGallery'
import Quotation from './Pages/Quotation'
import Review from './Pages/Review'
import TenderContract from './Pages/TenderContract'
import Enquiry from './Pages/Enquiry'
import Header from './Home/Header'
import MapVideo from './Pages/MapVideo'
import Circular from './Pages/Circular'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/product' element={<Products/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/appointment' element={<AppointmentForm/>} />
      <Route path='/associates' element={<MapVideo/>} />
      <Route path='/auction' element={<Auction/>} />
      <Route path='/career' element={<Career/>} />
      <Route path='/circular' element={<Circular/>} />
      <Route path='/management' element={<Management/>} />
      <Route path='/mediagallery' element={<MediaGallery/>} />
      <Route path='/quotation' element={<Quotation/>} />
      <Route path='/review' element={<Review/>} />
      <Route path='/tendercontract' element={<TenderContract/>} />
      <Route path='/TradeEnquiry' element={<Enquiry/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
