import logo from'./images/logo (1).svg'
import search from './images/search.svg'
import user from'./images/user.svg'
import SignUpBtn from '../SignUpBtn'
import '../styles/header.css'
function Header({children}) {
  return (
    <header>
       <div >
        <img src={logo} alt="logo" />
       </div>
       <div>{children}</div>
       <div className='btn-box'>
        <img src={search} alt="search"  style={{width:'24px', height:'24px'}}/>
        <img src={user} alt="user" style={{width:'24px', height:'24px'}}/>
        <SignUpBtn></SignUpBtn>
       </div>
    </header>
  )
}

export default Header