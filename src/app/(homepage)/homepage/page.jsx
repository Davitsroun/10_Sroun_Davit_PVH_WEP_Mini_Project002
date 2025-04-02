import Logo from "@/components/logo";
import Sidebarecom from "../_components/Sidebarecom";
import Header from "../_components/Header1";
import Header2 from "../_components/Header2";
import CardComponent from "@/components/card";

export default function () {

    return (
        <>
            <div className=" grid grid-cols-3 gap-10 ml-10 mr-10 h-full ">
                <div className=" flex flex-col gap-7 ">
                    <div className="w-full h-7 border-b-1 content-center text-watermelon-red ">
                        <p>Not Started</p>
                    </div>

                    <CardComponent />
                </div>


                <div className=" flex flex-col gap-7">
                    <div className="w-full h-7 border-b-1 content-center text-royal-blue ">
                        <p>In Progress</p></div>
                    <CardComponent />


                </div>
                <div className=" flex flex-col gap-7">
                    <div className="w-full h-7 border-b-1 content-center text-persian-green ">
                        <p>Finished</p></div>
                    <CardComponent />

                </div>
            </div>



        </>
    )
}