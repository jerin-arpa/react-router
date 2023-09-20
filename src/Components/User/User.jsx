
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div className='bg-blue-100 p-5 rounded-2xl'>
            <h2 className='text-center text-xl font-bold'>{name}</h2>
            <p className='text-center my-2'>{email}</p>
            <p className='text-center'>{phone}</p>

            <div className='flex justify-center'>
                <Link to={`/user/${id}`}><button className='bg-blue-700 text-white w-full font-bold px-10 py-2 rounded-lg my-2'>Show Details</button></Link>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;