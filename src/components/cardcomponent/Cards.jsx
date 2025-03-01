import '../styles/Cards.css'
// import icon from './images/service.svg'

function Cards({icons,title,caption}) {
  // const iconPath = `../assets/images/${icons}`;
  return (
    <div className="flex flex-col justify-center rounded-md shadow-xl indivisual-card">
        <div className="flex items-center justify-center mb-4 rounded-md icon-box ml-7"><img src={`./images/${icons}`} alt='icons' /> </div>
        <div className='ml-7'>
            <h4 id='title' className='mb-3 text-lg font-bold'>{title}</h4>
            <p className='w-4/5 text-base font-bold'>{caption}</p>
        </div>

    </div>
  )
}

export default Cards