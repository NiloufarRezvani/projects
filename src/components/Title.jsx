import heroImg from '../assets/images/hero image 1.png'
import SignUpBtn from './SignUpBtn'
import './styles/Title.css'

function Title() {
  return (
    <div className='top-container'>
      <div className='text-container'>
        <h1>Find Your Dream Home</h1>
        <h6>Explore our curated selection of exquisite properties meticulously
          tailored to your unique dream home vision</h6>
          <SignUpBtn></SignUpBtn>
      </div>
      <div className='image-container'>
        <img src={heroImg} alt="home" />
        
      </div>
    </div>
  )
}

export default Title