import tick from '../assets/images/tick.svg'
import email from '../assets/images/email.svg'

function Help() {
  return (
    <div className="flex flex-col items-center justify-center h-[650px]  m-auto">
        <h4 className="w-2/3 text-4xl font-extrabold text-center font-family" style={{color:"#2B1B12"}}>Do You Have Any Questions?
        Get Help From Us</h4>
        <div className='flex items-center justify-between gap-10 mt-9'>
        <div className='flex mb-5'>
            <img src={tick} alt="tick"></img>
            <p className='text-lg font-bold font-family'>Chat live with our support team</p>
        </div>
        <div className='flex'>
            <img src={tick} alt="tick"></img>
            <p className='text-lg font-bold font-family'>Browse our FAQ</p>
        </div>
        </div>
        <div>
        <div className='relative flex items-center flex-1 gap-4'>
            <img className='mr-[-30px] w-6 h-6 absolute ' src={email} alt="" />
            <input placeholder='Enter your email address ' className='w-[505px] h-[58px] p-6'  type="text"  style={{backgroundColor:"#DDC7BB"}}/>
            <button>Submit</button>
        </div>
        </div>
       
    </div>
  )
}

export default Help