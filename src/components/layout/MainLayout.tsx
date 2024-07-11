import Footer from "@/pages/Shared/Footer";
import NavBar from "@/pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div data-theme="light">
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;