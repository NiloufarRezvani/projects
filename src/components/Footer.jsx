import logo from '../assets/images/logo.svg'
import instagram from '../assets/images/instagram.svg'
import facebook from '../assets/images/facebook (1).svg'
import twitter from '../assets/images/twitterx.svg'

function Footer() {
  return (
    <footer className=" h-[700px] w-full flex items-center justify-between p-20"style={{backgroundColor:"#DDC7BB"}}>
        <div>
            <img src={logo} alt="logo" />
            <p className='w-2/4 mt-4 text-lg font-bold font-family' style={{color:"#4F3527"}}>Bringing you closer to your dream home, one click at a time.</p>
            </div>
        <div>
            <h4 className='text-xl font-extrabold' style={{color:"#4F3527"}}>About</h4>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Careers</p>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Our Team</p>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>our story</p>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Resources</p>
        </div>
        <div>
        <h4 className='text-xl font-extrabold' style={{color:"#4F3527"}}>Support</h4>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>FAQ</p>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>conect us</p>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>help center</p>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Terms of service</p>
        </div>
        <div>
        <h4 className='text-xl font-extrabold' style={{color:"#4F3527"}}>Find us</h4>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Events</p>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Locations</p>
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Newsletters </p>
           
        </div>
        <div>
        <h4 className='text-xl font-extrabold' style={{color:"#4F3527"}}>Our Social</h4>
        <div className='flex gap-3'>
            <img className='mt-9' src={instagram} alt="" />
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Instagram</p>
            </div>
           <div className='flex gap-3'>
            <img className='mt-9' src={facebook} alt="" />
            <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Facebook</p>
            </div>
           <div className='flex gap-3'><img className='mt-9' src={twitter} alt="" />
           <p className='text-lg font-bold mt-9 font-family' style={{color:"#4F3527"}}>Twitter(x)</p>
           </div>
            
           
        </div>
        
    </footer>
  )
}

export default Footer