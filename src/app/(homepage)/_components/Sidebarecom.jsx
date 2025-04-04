
import { Circle, LogOut, Pointer, Star } from "lucide-react";
import React from "react";
import PopupButton from "@/components/popup";
import Workspace from "./Worksapcecard";
import { getSidebar } from "../../../../service/sidebar-service";
import Link from "next/link";
export default async function Sidebarecom() {

    const data = await getSidebar();
    

    console.log("workspace",data)
    return (<>
        <div className=" w-full h-screen flex-col gap-10 ">

            <div className=" w-full h-60  bg-white flex-col gap-10">
                <div className="flex justify-between">
                    <div> <p>Workspace</p></div>
                   <PopupButton/>
                </div>
                <div className=" w-full h-full flex flex-col gap-2 overflow-scroll mt-2 border-none">

                {data
                        .filter((item) => item.isFavorite == false) // Filter items where isFavorite is true
                        .map((item) => (
                            <Workspace key={item.workspaceId}  item={item}/>
                    
                        ))}
                </div>
            </div>

            <div className=" w-full h-50 mt-10  ">
                <div className="flex justify-between">
                    <div> <p>Workspace</p></div>
                    <div>
                        <Star fill=" #FFD700" color=" #FFD700 " />
                    </div>
                </div>
                <div className=" w-full h-40 flex flex-col gap-2 overflow-scroll mt-2 border-none">

                    {data
                        .filter((item) => item.isFavorite) // Filter items where isFavorite is true
                        .map((item) => (
                    
                            <Workspace key={item.workspaceId} item={item}/>
                        ))}
                </div>
            </div>

            <div className="mt-5 flex gap-3">
                <LogOut />
                <Link href="/">
                <p>Logout</p>
                </Link>
              
            </div>
        </div>

    </>)
}