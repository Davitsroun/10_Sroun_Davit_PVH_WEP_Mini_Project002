'use client'
import { TbPoint } from "react-icons/tb";
import UpdateWorkspaec from "./updateWorkspace";
import { useRouter } from "next/navigation";

export default function Workspace({item}){
    const router = useRouter();
    return(<>
    <div onClick={()=> router.push(`/workspace/${item.workspaceId}`)}  className="flex justify-between bg-neutral-content rounded-lg">
                                    <div className="flex gap-3">
                                        <TbPoint className="mt-1.5" />
                                        <p>{item.workspaceName}</p>
                                    </div>
                                    <div>
                                        < UpdateWorkspaec className="mt-2" />
                                    </div>
          </div>

  
    </>)
}