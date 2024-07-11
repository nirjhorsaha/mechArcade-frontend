import Container from "@/pages/Shared/Container/Container";
import Footer from "@/pages/Shared/Footer";
import NavBar from "@/pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div data-theme="light">
            <Container>
                <NavBar />
                <Outlet />
                <Footer />
            </Container>
        </div>
    );
};

export default MainLayout;