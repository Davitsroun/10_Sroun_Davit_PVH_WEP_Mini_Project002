"use client"
import { Star } from "lucide-react";
import React, { useState } from "react";
import { nameService } from "../../../../service/name-service";
export default function Header2() {
   // const [learning, setLearning]= useState(nameService);
 

    // function handleChangeFavorite(id){
    //       setLearning((data)=>{

    //         return data.map((item)=>
    //           item.id === id ? {...item, isFavorite : !item.isFavorite}:  item
    //         )
    //       })
        
    // }

    return(<>
     <div className="w-full h-full flex justify-between  pl-10 pr-10 items-center text-2xl">
     <p>HRD Design</p>
     <Star/>
     {/* <Star color={option.isFavorite ? "#FAA300":" black"} fill={option.isFavorite ? "#FAA300":" white"}  onClick={()=>handleChangeFavorite(option.id)}   size={20}/> */}
     </div>
    </>)
}