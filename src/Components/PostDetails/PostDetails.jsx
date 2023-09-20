import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { body } = postDetails;
    return (
        <div className="flex justify-center">
            <div className="bg-blue-100 w-2/3">
                <h2 className="text-center p-10">Details about Post: {body}</h2>
            </div>
        </div>
    );
};

export default PostDetails;