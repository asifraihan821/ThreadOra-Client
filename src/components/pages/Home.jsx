import Navbar from '../Navbar/Navbar';
import About from './About';
import ProductOptions from '../Products/ProductOptions';
import CaroselSlide from '../Caroesel/CaroselSlide';
import TrendingProducts from '../Products/TrndingProducts/TrendingProducts';
import Features from '../Features/Features';
import Discount from '../Discount/Discount';
import ApiFetch from '../ApiFetch/ApiFetch';
import ProductsSection from '../Products/ProductSection';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <>
            <Navbar />
            <Categories />
            <ProductOptions />
            <ApiFetch />
            <CaroselSlide />
            <TrendingProducts />
            <Discount />
            <Features />
            <ProductsSection />
            <About />
        </>
    );
};

export default Home;