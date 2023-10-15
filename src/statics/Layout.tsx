import { Outlet } from "react-router-dom"
import Sider from "./Sider"


const Layout = () => {
  return (
    <div className="flex ">
        <Sider/>
        <div className="w-[100vw] flex justify-end  ">
            <div className=" w-[calc(100vw-200px)] small:w-full h-[100vh]">
            <Outlet/>
            </div>
        </div>
        
    </div>
  )
}

export default Layout