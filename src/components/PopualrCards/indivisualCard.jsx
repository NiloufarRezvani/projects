import SignUpBtn from "../SignUpBtn"
import home1 from './images/home1.png'
import locations from './images/location.svg'
import room from './images/rooms.svg'
import sizes from './images/size.svg'


function IndivisualCard({img,location,rooms,size,price}) {
  return (
    <div className="flex flex-col  rounded-md w-[382px] h-[534px] shadow-xl" style={{backgroundColor:"#DDC7BB"}}>
        <div><img className="rounded-t-lg" src={home1} alt="homes" /></div>
        <div>
            <div className="flex mt-5"><img src={locations} alt="" /><h4 className="text-xl font-bold font-family">{location}</h4></div>
            <div className="flex mt-5 justify-evenly">
            <div className="flex"><img className="bg-white rounded-lg" src={room} alt="" /><p>{rooms}</p></div>
            <div className="flex"><img className="bg-white rounded-lg" src={sizes} alt="" /><p>{size}</p></div>
            </div>
            <div className="flex items-center justify-around gap-5 mt-5">
                <SignUpBtn></SignUpBtn>
                <p className="font-bold" style={{color:"#4F3527"}}>{price}</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default IndivisualCard