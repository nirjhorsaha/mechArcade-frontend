import Container from "@/pages/Shared/Container/Container";
import Footer from "@/pages/Shared/Footer";
import NavBar from "@/pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div data-theme="light">
            <main>
                <NavBar />
                <div>
                    <Container className="min-h-screen">
                        <Outlet />
                    </Container>
                </div>
                <Footer />
            </main>
            {/* <Container>
                <NavBar />
                <Outlet />
                <Footer />
            </Container> */}
        </div>
    );
};

export default MainLayout;