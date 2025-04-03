'use server'
import CardComponent from '@/components/card'
import React from 'react'
import { task } from '../../../../../service/task-service';
import Header2 from '../../_components/Header2';

export default async function page({ params }) {
    const { id } =  await params;
   const data = await task(id);
   

    return (


        <div className='w-full h-full'>
    
            
            <div className=" grid grid-cols-3 gap-10 ml-10 mr-10 h-full ">
                <div className=" flex flex-col gap-7 ">
                    <div className="w-full h-7 border-b-1 content-center text-watermelon-red ">
                        <p>Not Started</p>
                    </div>
                    {data.filter((item) => item.status == "NOT_STARTED")
                    .map((item)=>(
                                <CardComponent key={item.taskId}  {...item} />
                    ))}
                </div>

                <div className=" flex flex-col gap-7 ">
                    <div className="w-full h-7 border-b-1 content-center text-persian-green ">
                        <p>In Progress</p>
                    </div>
                    {data.filter((item) => item.status == "IN_PROGRESS")
                    .map((item)=>(
                                <CardComponent key={item.taskId}  {...item} />
                    ))}
                </div>

                <div className=" flex flex-col gap-7 ">
                    <div className="w-full h-7 border-b-1 content-center text-persian-green">
                        <p>Finished</p>
                    </div>
                    {data.filter((item) => item.status == "FINISHED")
                    .map((item)=>(
                                <CardComponent key={item.taskId}  {...item} />
                    ))}
                </div>

            
            </div>
            
        </div>
    )
}
