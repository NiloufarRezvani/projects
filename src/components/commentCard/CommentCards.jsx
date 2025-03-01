import left from './images/left.svg'
import right from './images/right.svg'
import CommentCard from './CommentCard'
import { useEffect, useState } from 'react'
import axios from 'axios'


function CommentCards() {
    const [cards,setCards]=useState([]);
    const [index,setIndex]=useState(0)
    async function getData() {
        const url ='http://localhost:4000/comments';
        try{
            const data = (await axios.get(url)).data;
           console.log(data)
            setCards(data)
      
          }
          catch(error){
            console.log(error);
             
        }
    
    }
    useEffect(()=>{
        getData()

    },[])
    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % cards.length);
        if(index===7){
          setIndex(index===0)
          return index

        }
      };
      const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        if(index===7){
          setIndex(index===0)
          return index

        }
        
      };
      console.log(index);
      

  return (
    <div className="flex flex-col items-center justify-center rounded-md mt-11  w-full h-[820px] mb-[144px]" style={{backgroundColor:'#fef7f2'}}>
        <h2 className="w-1/4 font-extrabold text-center font-family">What People Say About Dwello</h2>
        
        <div className='flex items-center gap-6 mb-7'>
            {
                cards.slice(index,index+3).map((one)=>(<CommentCard key={one.id} {...one}></CommentCard>))
                
            
                
            }
        </div>
        <div className='flex gap-10'>
        <button className='flex items-center justify-center rounded-full w-[58px] h-[58px]' onClick={prevSlide}><img src={left} alt="left" /></button>
        <button className='flex items-center justify-center rounded-full w-[58px] h-[58px]' onClick={nextSlide}><img src={right} alt="right" /></button>
        </div>
   
        
    </div>
  )
}

export default CommentCards