import { Outlet } from "react-router-dom";
import Headers from "../Headers/Headers";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-7">Explore React Router</h1>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;