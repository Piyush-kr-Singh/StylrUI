import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        profession: '',
        location: '',
        email: '',
        password: '',
        image: null,
    });

    const [loading, setLoading] = useState(false); // State for loading effect

    const { storingTokenInLS } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const response = await fetch('https://stylr-ui-backend.vercel.app/api/v1/user/register', {
                method: 'POST',
                body: data, // Send FormData
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result.token);

                // stroing the token in the localstorage
                // this will help us in identifying user whether he/she is admin or not
                storingTokenInLS(result.token);

                setFormData({
                    name: '',
                    profession: '',
                    location: '',
                    email: '',
                    password: '',
                    image: null,
                });
                window.scrollTo({ top: 0 });
                navigate("/");
                toast.success("User registered successfully");
            } else {
                toast.error("Failed user registration");
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-[110px] md:pt-[135px]">
            <ToastContainer />
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm md:shadow-lg w-full max-w-[650px]">
                <h2 className="text-4xl font-roboto font-extrabold mb-3">Create an account</h2>
                <p className='text-[17px] font-roboto font-semibold text-slate-600 mb-5'>Join our community of designers and developers to get access to hundreds of UI components, plugins, resources, and design systems.</p>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>*</span> Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Sam Smith'
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>*</span> Profession</label>
                    <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        placeholder='Developer'
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>*</span> Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder='India'
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>*</span> Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='name@company.com'
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>*</span> Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>*</span> Profile Image (Less than 1mb size)</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center px-5 py-3 text-[18px] font-roboto font-bold tracking-wide leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none transition-all duration-100 relative"
                    style={{ minWidth: "160px" }} // Ensure a minimum width to prevent resizing
                >
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8zm10 5.291V14a2 2 0 10-4 0v3.291a6 6 0 114 0z"
                                ></path>
                            </svg>
                            <span>Loading...</span>
                        </div>
                    )}
                    {!loading && "Register"}
                </button>

                <div className='pt-5'>
                    <p className='text-[17px] font-bold font-roboto text-slate-500'>Already have an account? <Link to="/login" className='text-[#fd9f60] font-roboto font-bold text-[16px] hover:text-[#FF7D49]'>Login here.</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
