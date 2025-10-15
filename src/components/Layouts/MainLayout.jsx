import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import ProductOptions from '../Products/ProductOptions';
import About from '../pages/About';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <About />
        </div>
    );
};

export default MainLayout;