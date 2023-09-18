import { Link } from "react-router-dom";


const Headers = () => {
    return (
        <div>
            <nav className="flex justify-between bg-gray-100 p-5 rounded-xl mb-7">
                <span className="text-xl font-bold">My Website</span>
                <div className="flex gap-5 font-bold">
                    <Link to="/">Home</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </nav>
        </div>
    );
};

export default Headers;