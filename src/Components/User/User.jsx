
import PropTypes from 'prop-types';

const User = ({ user }) => {
    const { name, email, phone } = user;
    return (
        <div className='bg-blue-100 p-5 rounded-2xl'>
            <h2 className='text-center text-xl font-bold'>{name}</h2>
            <p className='text-center my-2'>{email}</p>
            <p className='text-center'>{phone}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;