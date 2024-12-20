import { Outlet } from "react-router-dom";
import HeaderNav from "../components/Headers/HeaderNav";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import LoaderAnimation from "../components/LottieAnimations/LoaderAnimation";

function MainLayout() {
    const [isPageStarting, setIsPageStarting] = useState(true);

    useEffect(() => {
        if (isPageStarting) {
            const timer = setTimeout(() => {
                setIsPageStarting(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isPageStarting]);

    return (
        isPageStarting ?
            <div className="w-full h-[100vh] flex items-center justify-center">
                <LoaderAnimation />
            </div>
            :
            <div className="bg-[#020d18] font-roboto">
                <HeaderNav />
                <Outlet />
                <Footer />
            </div>
    );
}

export default MainLayout;