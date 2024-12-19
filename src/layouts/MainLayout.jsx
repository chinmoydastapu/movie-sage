import { Outlet } from "react-router-dom";
import HeaderNav from "../components/Headers/HeaderNav";
import Footer from "../components/Footer/Footer";
import { useContext, useEffect } from "react";
import { DataLoadingContext } from "../contexts/contextsPrototypes";

function MainLayout() {
    const { isLoadingState, moviesData } = useContext(DataLoadingContext);

    useEffect(() => {
        console.log(isLoadingState, moviesData);
    }, [isLoadingState, moviesData]);

    return (
        <div className="bg-[#020d18]">
            <HeaderNav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;