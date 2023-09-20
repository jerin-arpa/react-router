import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const { name } = user;
    return (
        <div className="text-center font-bold text-2xl">
            <h2>Details about user: {name}</h2>
        </div>
    );
};

export default UserDetails;