"use client"
import Updatetask from "@/app/(homepage)/_components/UpdateTask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React, { useState } from "react";


export default  function CardComponent(item) {


  const[value,setvalue]= useState("")
  const handlechang= (e)=>{
   setvalue(e)
  }
 console.log("sataud",value)
  return (
  
    <div>
  
        <div key={item.taskId} className="border border-gray-300 rounded-xl mt-8">
          <div className="p-5">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold capitalize">{item.taskTitle}</h2>
              <Updatetask/>
            </div>

            {/* Task details */}
            <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
              {item.taskTitle || "No description available"}
            </p>

            <div className="flex justify-between items-center mt-4">
              {/* Tag */}
              <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                {item. tag|| "DESIGN"}
              </p>

              {/* Status indicator */}
              <div className="rounded-full w-8 h-8 bg-watermelon-red"></div>
            </div>
          </div>

          {/* Progress */}
          <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
            <Select onValueChange={(value) => handlechang(value) }>
              <SelectTrigger className="w-36 truncate border-watermelon-red text-watermelon-red">
                <SelectValue placeholder={item.status || "NOT_STARTED"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                <SelectItem value="FINISHED">FINISHED</SelectItem>
              </SelectContent>
            </Select>

            {/* Date */}
            <p className="flex gap-3 text-light-steel-blue  ">
              <Clock size={22} /> {item.startDate || "Mar 23, 2025"}
            </p>
          </div>
        </div>
  </div>
  );
}
