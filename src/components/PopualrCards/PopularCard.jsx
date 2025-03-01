import IndivisualCard from "./indivisualCard"
import { useEffect,useState } from "react";
import axios from "axios";
function PopularCard() {
  const [homeCard,setHomeCard]=useState([])
  async function getData() {
    const url ='http://localhost:4000/cards'
    
    try{
      const data = (await axios.get(url)).data;
     console.log(data)
      setHomeCard(data)

    }
    catch(error){
      console.log(error);
       
  }}
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="flex flex-col justify-center mt-11">
        <h5 className="text-4xl font-extrabold text-center mb-7 font-family ">Our Popular Residences</h5>
        <div className="flex items-center justify-center gap-11 ">
          {
            homeCard.map((card)=>(<IndivisualCard key={card.id} {...card}/>))
          }
        </div>
    </div>
  )
}

export default PopularCard