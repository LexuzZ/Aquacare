import AdminLayout from "@/Layouts/AdminLayout";

import { Head, usePage, Link } from "@inertiajs/react";
import "../../css/sb-admin-2.css";

export default function Blog() {
    return (
        <AdminLayout>
            <>
                {/* component */}
                <main className="mt-14 py-8 flex justify-center items-center dark:bg-slate-200">
                    <div className="max-w-7xl dark:bg-slate-300 dark:text-gray-900">
                        <form className=" w-full p-4 rounded shadow-md">
                            <h2 className="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200">
                                New Article
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Your email address will not be published.
                                Required fields are marked *
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="mb-4 col-span-1 md:col-span-3">
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        className="w-full px-3 py-2 dark:bg-slate-200 text-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
                                        placeholder="Type Comment...*"
                                        rows={5}
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                                        placeholder="Name*"
                                        required=""
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                                        placeholder="Email*"
                                        required=""
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                                        placeholder="Website"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="py-4 px-6 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
                                >
                                    Post Comment →
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </>
            <>
                {/* component */}
                <div className="relative pt-2 lg:pt-2 min-h-screen">
                    <div
                        className="bg-cover w-full flex justify-center items-center"
                        style={{
                            backgroundImage: 'url("/images/mybackground.jpeg")',
                        }}
                    >
                        <div className="w-full bg-white p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
                            <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                                    <article className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                                        <a
                                            target="_self"
                                            href="/blog/slug"
                                            className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                                        />
                                        <div className="relative mb-4 rounded-2xl">
                                            <img
                                                className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                alt=""
                                            />
                                            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-5 w-5 text-red-700"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                    />
                                                </svg>
                                                <span className="ml-1 text-sm text-slate-400">
                                                    2
                                                </span>
                                            </div>
                                            <a
                                                className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                                                href="/blog/slug"
                                                target="_self"
                                                rel="noopener noreferrer"
                                            >
                                                Read article
                                                <svg
                                                    className="ml-2 w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex justify-between items-center w-full pb-4 mb-auto">
                                            <div className="flex items-center">
                                                <div className="pr-3">
                                                    <img
                                                        className="h-12 w-12 rounded-full object-cover"
                                                        src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm font-semibold ">
                                                            Morris Muthigani
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            Published on
                                                            19/03/2024
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="text-sm flex items-center text-gray-500 ">
                                                    2 Days ago
                                                    <svg
                                                        className="ml-1 w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1}
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-xl leading-8">
                                            <a
                                                href="/blog/slug"
                                                className="block relative group-hover:text-red-700 transition-colors duration-200 "
                                            >
                                                Instant Help at Your Fingertips
                                            </a>
                                        </h3>
                                        <div></div>
                                    </article>
                                    <article className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                                        <a
                                            target="_self"
                                            href="/blog/slug"
                                            className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                                        />
                                        <div className="relative mb-4 rounded-2xl">
                                            <img
                                                className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                alt=""
                                            />
                                            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-5 w-5 text-red-700"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                    />
                                                </svg>
                                                <span className="ml-1 text-sm text-slate-400">
                                                    2
                                                </span>
                                            </div>
                                            <a
                                                className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                                                href="/blog/slug"
                                                target="_self"
                                                rel="noopener noreferrer"
                                            >
                                                Read article
                                                <svg
                                                    className="ml-2 w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex justify-between items-center w-full pb-4 mb-auto">
                                            <div className="flex items-center">
                                                <div className="pr-3">
                                                    <img
                                                        className="h-12 w-12 rounded-full object-cover"
                                                        src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm font-semibold ">
                                                            Morris Muthigani
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            Published on
                                                            19/03/2024
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="text-sm flex items-center text-gray-500 ">
                                                    2 Days ago
                                                    <svg
                                                        className="ml-1 w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1}
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-xl leading-8">
                                            <a
                                                href="/blog/slug"
                                                className="block relative group-hover:text-red-700 transition-colors duration-200 "
                                            >
                                                Instant Help at Your Fingertips
                                            </a>
                                        </h3>
                                        <div></div>
                                    </article>
                                    <article className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                                        <a
                                            target="_self"
                                            href="/blog/slug"
                                            className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                                        />
                                        <div className="relative mb-4 rounded-2xl">
                                            <img
                                                className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                alt=""
                                            />
                                            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-5 w-5 text-red-700"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                    />
                                                </svg>
                                                <span className="ml-1 text-sm text-slate-400">
                                                    2
                                                </span>
                                            </div>
                                            <a
                                                className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                                                href="/blog/slug"
                                                target="_self"
                                                rel="noopener noreferrer"
                                            >
                                                Read article
                                                <svg
                                                    className="ml-2 w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex justify-between items-center w-full pb-4 mb-auto">
                                            <div className="flex items-center">
                                                <div className="pr-3">
                                                    <img
                                                        className="h-12 w-12 rounded-full object-cover"
                                                        src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex flex-1">
                                                    <div className="">
                                                        <p className="text-sm font-semibold ">
                                                            Morris Muthigani
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            Published on
                                                            19/03/2024
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="text-sm flex items-center text-gray-500 ">
                                                    2 Days ago
                                                    <svg
                                                        className="ml-1 w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1}
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-xl leading-8">
                                            <a
                                                href="/blog/slug"
                                                className="block relative group-hover:text-red-700 transition-colors duration-200 "
                                            >
                                                Instant Help at Your Fingertips
                                            </a>
                                        </h3>
                                        <div></div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </AdminLayout>
    );
}