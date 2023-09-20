import { NavLink } from "react-router-dom";
import './Header.css'


const Headers = () => {
    return (
        <div>
            <nav className="flex flex-wrap justify-between container mx-auto p-5 mb-7  bg-gray-100 rounded-xl">
                <span className="text-xl font-bold">My Website</span>
                <div className="flex gap-5 font-bold">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Headers;