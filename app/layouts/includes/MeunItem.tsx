"use client"

import { MenuItemTypes } from "@/app/types";
import { AiOutlineHome } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";

export default function MenuItem({iconSting, colorSting, sizeSting}:MenuItemTypes){

    const icons = ()=>{
        if(iconSting == 'Fou You') return <AiOutlineHome size={sizeSting} color={colorSting}/>
        if(iconSting == 'Following') return <RiGroupLine size={sizeSting} color={colorSting}/>
        if(iconSting == 'LIVE') return <BsCameraVideo size={sizeSting} color={colorSting}/>
    }
    return (
        <>
            <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
                <div className="flex items-center lg:mx-0 mx-auto">
                    
                    {icons()}

                    <p className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px] text-[${colorSting}]`}>
                        {iconSting}
                    </p>
                </div>
            </div>
        </>
    )
}