import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    return (
        <div className="container mx-auto">
            <h2 className="text-center font-bold text-2xl">Our Users: {users.length}</h2>
            <p className="text-center">Our users are always special for us</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {
                    users.map(user => (<User key={user.id} user={user}></User>))
                }
            </div>
        </div>
    );
};

export default Users;