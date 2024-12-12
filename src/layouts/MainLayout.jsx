import { Outlet } from "react-router-dom";
import HeaderNav from "../components/Headers/HeaderNav";
import Footer from "../components/Footer/Footer";

function MainLayout () {
    return (
        <div>
            <HeaderNav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;