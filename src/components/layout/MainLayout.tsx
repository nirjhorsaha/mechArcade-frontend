import useCartWarning from "@/hooks/useCartWarning";
import Container from "@/pages/Shared/Container/Container";
import Footer from "@/pages/Shared/Footer";
import NavBar from "@/pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    useCartWarning(); // global cart warning

    return (
        <main>
            <div data-theme="light">
                <Container className="min-h-screen">
                    <NavBar />
                    <Outlet />
                </Container>
                <Footer />
            </div>
        </main>
    );
};

export default MainLayout;