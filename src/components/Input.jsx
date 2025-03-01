import './styles/input.css'

function Input({ address, placeHolder }) {
    return (
        <form>
            <input type="text" placeholder={placeHolder} />
            <img src={address} alt="icons" className='icons' />
        </form>

    )
}

export default Input