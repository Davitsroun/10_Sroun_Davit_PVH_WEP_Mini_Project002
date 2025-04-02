import { FaChevronRight } from "react-icons/fa6";
import { BellRing, Circle } from "lucide-react";
import React from "react";
import { nameService } from "../../../../service/name-service";
export default async function Header() {
  const data = await nameService()
    return(<>
    <div className="w-full h-full flex justify-between items-center border-b-1">
    <div className="flex gap-10 ml-10 text-2xl  items-center">
                            <p>Workspace</p>
                         <FaChevronRight/>
                            <p>HRD Design</p>
                        </div>
                        <div className="mr-10 flex  gap-2 items-center">
                            <BellRing/>
                            
                            <img src={data.profile} alt="" className="h-10 rounded-2xl" />
                            <div className="flex flex-col">
                              
                            <p>{data.username}</p>
                            <p>{data.email}</p>    
                             </div>
                          
                        </div>
         </div>

    
    </>)
}