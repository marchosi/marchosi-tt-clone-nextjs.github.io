import Link from "next/link" 
import { usePathname } from "next/navigation" 
import  MenuItem  from "./MeunItem"
import ClientOnly from "@/app/components/ClientOnly"
import MenuItemFollow from "./MenuItemFollow"
import { useGeneralStore } from "@/app/stores/general"
import { useUser } from "@/app/context/user"
import { useEffect } from "react"
import { userAgent } from "next/server"

export default function TopNav(){

    let { setRandomUsers, randomUsers } = useGeneralStore()

    const contextUser = useUser()
    const pathname = usePathname()

    useEffect(() => {setRandomUsers() }, [])
    return(
        <>
            <div
                id="SideNavMain"
                className={`
                        fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                        ${pathname === '/' ? 'lg:w-[310px]': 'lg w-[220px]'}
                    `}
            >
                <div className="lg:w-full w-[55px] mx-auto">
                    <Link  href= "/">
                        <MenuItem
                            iconSting="Fou You"
                            colorSting={pathname === '/' ? '#F02C56' : ''}
                            sizeSting="25"
                        />
                    </Link>
                    <MenuItem iconSting="Following" colorSting="#000000" sizeSting="25"/>
                    <MenuItem iconSting="LIVE" colorSting="#000000" sizeSting="25"/>
                    <div className="border-b lg:ml-2 mt-2"/>
                            <h3 className="lg-block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Suggested accounts</h3>

                            <div className="lg:hidden block pt-3"/>
                            <ClientOnly>
                                <div className="cursor-pointer">
                                    {randomUsers.map((user,index) => (
                                       <MenuItemFollow key={index } user={user} /> 
                                    ))}
                                </div>
                            </ClientOnly>

                            <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
                                See all
                            </button>


                    {contextUser?.user?.id ? (
                        <div>
                            <div className="border-b lg:ml-2 mt-2"/>
                            <h3 className="lg-block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Following accounts</h3>

                            <div className="lg:hidden block pt-3"/>
                            <ClientOnly>
                                <div className="cursor-pointer">
                                    {randomUsers.map((user,index) => (
                                       <MenuItemFollow key={index } user={user} /> 
                                    ))}
                                </div>
                            </ClientOnly>

                            <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
                                See more
                            </button>
                        </div>
                    ) : null}
                    <div className="lg:block hidden border-b lg:ml-2 mt-2"/>

                    <div className="lg:block hidden text-[11px] text-gray-500">
                        <p className="pt-4 px-2">About Newsroom TikTok Shop Contact Careers ByteDance</p>
                        <p className="pt-4 px-2">TikTok foe Good Advrtise Developers Transparency TikTok Rewards TikTok Browse TikTok Embeds</p>
                        <p className="pt-4 px-2">Help Safety Terms Privacy Creator Poral Community Guidelines</p>
                        <p className="pt-4 px-2">© 2024 TikTok</p>
                    </div>
                </div>
            </div>
        </>
    )
}
