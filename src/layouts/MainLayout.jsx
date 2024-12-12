import { Outlet } from "react-router-dom";
import HeaderNav from "../components/Headers/HeaderNav";
import Footer from "../components/Footer/Footer";

function MainLayout () {
    return (
        <div className="bg-[#020d18]">
            <HeaderNav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;