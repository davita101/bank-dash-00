import * as React from "react"

import { SearchForm } from "./search-form"
import { VersionSwitcher } from "./version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarRail,
  SidebarTrigger,
} from "./ui/sidebar"
import { RiSettings5Fill } from "react-icons/ri"
import { FaCreditCard, FaLightbulb } from "react-icons/fa"
import { MdAccountCircle, MdDesignServices } from "react-icons/md"
import { FaCircleDollarToSlot, FaHandHoldingDollar } from "react-icons/fa6"
import { GrTransaction } from "react-icons/gr"
import { HiMiniHome } from "react-icons/hi2"
import IconRender from "../hooks/icon-render"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      name: "Dashboard",
      icon: HiMiniHome
    },
    {
      name: "Transactions",
      icon: GrTransaction
    },
    {
      name: "Accounts",
      icon: MdAccountCircle
    },
    {
      name: "Investments",
      icon: FaCircleDollarToSlot
    },
    {
      name: "Creditcard",
      icon: FaCreditCard
    },
    {
      name: "Loans",
      icon: FaHandHoldingDollar
    },
    {
      name: "Services",
      icon: MdDesignServices
    },
    {
      name: "Privileges",
      icon: FaLightbulb
    },
    {
      name: "Settings",
      icon: RiSettings5Fill
    }
  ]
}
import FullLogo from "../assets/mainLogo/FullLogo.svg"
import Image from "next/image"
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [move, setMove] = React.useState<number>(0)

  const setActive = (index: number) => {
    setMove(index)
  }
  return (
    <Sidebar {...props} className="text-primary400 max-sm:hidden">
      <SidebarContent>
        <div className='lg:ml-[44px] sm:ml-[32px] lg:mb-[100px] sm:mb-[38px] ml-[25px] my-[31px] cursor-pointer'>
          <Image src={FullLogo} alt='BankDash logo' />
        </div>
        {data.navMain.map((item, index) => (
          <SidebarGroup key={item.name} className="p-0 cursor-pointer hover:bg-primary--200/10 transition-all">
            <div key={`_sidebar--${index}`} onClick={() => setActive(index)} className={`relative flex lg:gap-[38px] sm:gap-[25px] gap-[20px] ${move == index && "text-primary--300"} font-medium cursor-pointer`}>
              <div className={`w-[6px] ${(move === index) && "bg-primary--300"} rounded-r-[10px] h-[60px]`} />
              <div className='flex w-full gap-[26px] font-medium cursor-pointer h-[60px] items-center'>
                <IconRender src={item.icon} className={"text-[30px]"} />
                <h3 className='capitalize text-heading--400'>{item.name}</h3>
              </div>
              {/* ეს უნდა დავამტოთ  */}
              <SidebarTrigger className="sm:hidden absolute w-full h-full opacity-0"/>
            </div>
          </SidebarGroup >
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
