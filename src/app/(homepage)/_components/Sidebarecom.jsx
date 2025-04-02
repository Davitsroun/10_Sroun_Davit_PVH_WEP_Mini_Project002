
import Logo from "@/components/logo";
import { Circle, LogOut, Pointer, Star } from "lucide-react";
import React from "react";
import { getSidebar } from "../../../../service/sidebar-service.";
import { TbPoint } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import Popup from "@/components/popup";
import PopupButton from "@/components/popup";
export default async function Sidebarecom() {

    const data = await getSidebar();

    return (<>
        <div className=" w-full h-screen ">

            <div className=" w-full h-60  bg-white flex-col gap-10">
                <div className="flex justify-between">
                    <div> <p>Workspace</p></div>
                   <PopupButton/>
                </div>
                <div className=" w-full h-full flex flex-col gap-2 overflow-scroll mt-2">

                {data
                        .filter((item) => item.isFavorite == false) // Filter items where isFavorite is true
                        .map((item) => (
                            <div key={item.workspaceId} className="flex justify-between bg-neutral-content rounded-lg">
                                <div className="flex gap-3">
                                    <TbPoint className="mt-1.5" />
                                    <p>{item.workspaceName}</p>
                                </div>
                                <div>
                                    <IoIosMore className="mt-2" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className=" w-full h-50  ">
                <div className="flex justify-between">
                    <div> <p>Workspace</p></div>
                    <div>
                        <Star fill=" #FFD700" color=" #FFD700 " />
                    </div>
                </div>
                <div className=" w-full h-full flex flex-col gap-2 overflow-scroll mt-2">

                    {data
                        .filter((item) => item.isFavorite) // Filter items where isFavorite is true
                        .map((item) => (
                            <div key={item.workspaceId} className="flex justify-between bg-neutral-content rounded-lg">
                                <div className="flex gap-3">
                                    <TbPoint className="mt-1.5" />
                                    <p>{item.workspaceName}</p>
                                </div>
                                <div>
                                    <IoIosMore className="mt-2" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="mt-5 flex gap-3">
                <LogOut />
                <p>Logout</p>
            </div>
        </div>

    </>)
}