import Navbar from "./Navbar";
import {Outlet} from "react-router-dom"

const Layout: React.FC = () => {
    return ( <div id="layout">
        <Navbar></Navbar>
        <Outlet/>
    </div> );
}
 
export default Layout;