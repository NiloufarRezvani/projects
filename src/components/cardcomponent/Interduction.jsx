import Cards from "./Cards"

import '../styles/Interduction.css'
import { useEffect, useState } from "react"
import axios from "axios"

function Interduction() {
  const [features,setFeatures]=useState([])
  async function getData() {
    const url ='http://localhost:4000/interduction'
    
    try{
      const data = (await axios.get(url)).data;
     console.log(data)
      setFeatures(data)

    }
    catch(error){
      console.log(error);
       
  }}
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="flex flex-col items-center justify-center mt-6">
        <div className="top-title">
          <h5 className="text-4xl font-extrabold">Why Choose US</h5>
          </div>
        <p className="w-1/3 mt-5 mb-5 text-lg font-bold text-center">Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>
        <div className="flex gap-10">
          {
            features.map((feature)=>{
              return<Cards key={feature.id}  {...feature}></Cards>})
              
          }
        
        </div>
        
    </div>
  )
}

export default Interduction