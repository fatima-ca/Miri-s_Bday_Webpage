import type { ReactNode } from "react";
import { FaFire } from "react-icons/fa";

const SideBar = () => (
    
  <div className="fixed top-0 left-0 h-screen w-16 m-0 
                flex flex-col
                bg-gray-900 text-white" >
    <SideBarIcon icon={<FaFire size="28" />}/>
    
  </div>
);

const SideBarIcon = ({ icon }: { icon: ReactNode }) => (
  <div className="sidebar-icon">{icon}</div>
);

export default SideBar;