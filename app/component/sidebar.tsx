"use client"
import { MoreVertical, ChevronLast, ChevronFirst, LayoutDashboard, icons, LucideIcon, User, History, Store, Bell, Settings, Info, LogOut } from "lucide-react"
import { useContext, createContext, useState } from "react"
import styles from './sidebar.module.css'
import React from "react"
import { usePathname, useRouter } from "next/navigation";

const SidebarContext = createContext({})
interface ISidebarItem {
    name: string;
    path: string;
    icon: LucideIcon;
}
const menuItems: ISidebarItem[] = [
    { name: 'Dashboard', path: "/", icon: LayoutDashboard },
    { name: 'Users', path: "/Users", icon: User },
    { name: 'History', path: "/History", icon: History },
    { name: 'Suppliers', path: "/Suppliers", icon: Store },
    // เพิ่มเมนูอื่นๆ ตามต้องการ Suppliers
];

const menuItems2: ISidebarItem[] = [
    { name: 'Notifications', path: "/Notifications", icon: Bell },
    { name: 'Settings', path: "/Settings", icon: Settings },
    { name: 'Support', path: "/Support", icon: Info },
    // เพิ่มเมนูอื่นๆ ตามต้องการ Suppliers
];

export default function Sidebar({ children }: any) {
    const [expanded, setExpanded] = useState(true)
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <div className="flex justify-center space-x-2 mt-4">
                <img src="/img/iot_bg.png" width={50}></img>
                <p className="text-xl font-bold pt-2">IOT Dashboard</p>
            </div>
            <div className="flex flex-col align-top mt-12 mx-5 text-[#64748B] space-y-2"

            >
                {menuItems.map((item, index) => (
                    <div key={index} className={` p-3 rounded-2xl hover:bg-[#EEF2FF] hover:text-[#4F46E5] cursor-pointer drop-shadow-xl
                    ${item.path === pathname
                            ? "text-[#2C3CDE] bg-[#EEF2FF]" // Change "text-red-500" to your desired red color
                            : "text-[#64748B] hover:text-[#4F46E5]"
                        }`}

                        onClick={() => {
                            return router.push(item.path);
                        }}
                    >
                        <div className="flex flex-row space-x-2 items-center">
                            <item.icon size={20} />
                            <p className=" text-lg font-semibold">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col align-top mt-12 mx-5 text-[#64748B]">
                {menuItems2.map((item, index) => (
                    <div key={index} className=" p-3 rounded-2xl hover:bg-[#EEF2FF] hover:text-[#4F46E5] cursor-pointer drop-shadow-xl">
                        <div className="flex flex-row space-x-2 items-center">
                            <item.icon size={20} />
                            <p className=" text-lg font-semibold">{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <img src="/img/office.png"></img>
            </div>
            <div className="flex flex-col align-top mt-12 mx-5 text-[#f9564a]">
                <div className=" p-3 rounded-2xl hover:bg-[#EEF2FF] hover:text-[#4F46E5] cursor-pointer drop-shadow-xl">
                    <div className="flex flex-row space-x-2 items-center">
                        <LogOut size={20} />
                        <p className=" text-lg font-semibold">Log out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
