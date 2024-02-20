import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
