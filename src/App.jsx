import './App.css'
import BuyNowGiftCards from './BuyNowGiftCards'
import CourseSlider from './CourseSlider'
import EmailSubmit from './EmailSubmit'
import OffersSection from './FreeCardsAmazon'
import FreeCardSection2 from './FreeCardSection2'
import GiftCardSlider from './GiftCardSlider'
import Navbar from './Navbar'
import Slider from './Slider'
import SurvaySubmit from './SurvaySubmit'

function App() {
  return (
    <>
      <Navbar />
      {/* <Slider/> */}
      {/* <CourseSlider/> */}
      {/* <OffersSection/> */}
      <GiftCardSlider id="home" />
      <FreeCardSection2 id="exciting" />
      <EmailSubmit id="exclusive" />
      <SurvaySubmit id="outstanding" />
      <BuyNowGiftCards id="buynow"/>
    </>
  )
}

export default App
