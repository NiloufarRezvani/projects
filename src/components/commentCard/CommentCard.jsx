import room1 from './images/rooms1.png'
import star from './images/star.png'
import profileImg from './images/profile2.png'
function CommentCard({fullName,location,comment,rate}) {
    return (
        <div className='rounded-lg w-[382px] h-[430px]' style={{backgroundColor:'#DDC7BB'}}>
            <div>
                <img className='rounded-t-lg' src={room1} alt="room" /></div>
            <div>
                <div className='flex items-center justify-around'>
                    <img className='rounded-full ' src={profileImg} alt="profile" />
                    <div>
                    <div className='font-extrabold font-family' style={{color:'#2B1B12'}}>{fullName}</div>
                    <div className='font-semibold font-family' style={{color:'#2B1B12'}}>{location}</div>
                </div>
                <div className='bg-white w-[59px] h-[24px] rounded-lg flex ' >
                    <img src={star} alt="star" />
                    <div>{rate}</div>
                </div>
                </div>
                
                <div className='p-4 text-base font-semibold font-family' style={{color:'#4F3527'}}>
                {comment}
                </div>
            </div>
        </div>
    )
}

export default CommentCard