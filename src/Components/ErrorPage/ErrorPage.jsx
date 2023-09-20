import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="h-96 w-full">
            <h2 className="text-6xl font-bold text-center mt-20">Oops!!!!!!!!!</h2>
            <p className="text-4xl font-bold text-center my-5">{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3 className="text-center text-2xl my-3">Page not found</h3>
                    <Link className="flex justify-center" to="/">
                        <button className='bg-blue-700 text-white font-bold px-10 py-2 rounded-lg my-2'>Go Home</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;