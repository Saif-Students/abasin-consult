import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";


function Layout() {
    return (
      <>
        <div className="w-full">
             <Navbar />
          <Outlet />
        </div>
      </>
    );
  }


export default Layout