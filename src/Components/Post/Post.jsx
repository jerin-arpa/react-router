import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const { id, title, body } = post;

    return (
        <div className='bg-blue-100 p-5 rounded-2xl'>
            <h2 className='text-center text-xl font-bold'>{title}</h2>
            <p className='text-center my-2'>{body}</p>

            <Link to={`/post/${id}`}>
                <button className='bg-blue-700 text-white w-full font-bold px-10 py-2 rounded-lg my-2'>Show Details</button>
            </Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;