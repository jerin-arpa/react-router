import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { postId } = useParams();
    const navigate = useNavigate();

    const { body } = postDetails;

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex justify-center">
            <div className="bg-blue-100 w-2/3 px-5">
                <h2 className="text-center p-10">Details about Post: {body}</h2>

                <button onClick={handleGoBack} className='bg-blue-700 text-white w-full font-bold px-10 py-2 rounded-lg my-3'>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;