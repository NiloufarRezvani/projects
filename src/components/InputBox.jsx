import SignUpBtn from "./SignUpBtn"
import Input from "./Input"
import location from '../assets/images/location.svg'
import price from '../assets/images/price.svg'
import home from '../assets/images/home.svg'
import './styles/inputBox.css'
function InputBox() {
  return (
    <div className="input-box">
        <Input placeHolder='Location' address={location}></Input>
        <Input placeHolder='Type' address={home}></Input>
        <Input placeHolder='Price Range' address={price}></Input>
        <div><SignUpBtn></SignUpBtn></div>
        
    </div>
  )
}

export default InputBox