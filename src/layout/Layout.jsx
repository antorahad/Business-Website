import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white text-black font-googleFont">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;