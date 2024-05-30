import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";

import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";
import Popup from "reactjs-popup";

export default function Report({ auth }) {
    const role = auth.user.roles.name;
    const status = [
        "pending",
        "approved",
        "rejected",
        "completed",
        "onprogress",
    ];
    const { flash, errors, reports } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Pilih Status");
    const { data, setData, reset, put } = useForm({
        rasa: "",
        suhu: "",
        kekentalan: "",
        bau: "",
        warna: "",
        keasaman: "",
        detail: "",
        user_id: "",
        status: "",
    });

    let popup = null;
    const storeReport = (e) => {
        e.preventDefault();
        router.post("/report", data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    const updateStatus = (status) => {
        setSelectedStatus(status);
    };
    const updateReport = async (e, id) => {
        e.preventDefault();
        console.log(id);
        router.put(`/report/${id}`, data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    const testButton = (id) => {
        console.log(`Id ${id}`);
    };

    if (role === "user") {
        popup = (
            <Popup
                modal
                trigger={
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ms-10 ease-linear transition-all duration-150">
                        Create
                    </button>
                }
            >
                <form className="bg-slate-400 " onSubmit={storeReport}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Rasa
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("rasa", e.target.value)
                                }
                                value={data.rasa}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.rasa}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Suhu
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("suhu", e.target.value)
                                }
                                value={data.suhu}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.suhu}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Kekentalan
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("kekentalan", e.target.value)
                                }
                                value={data.kekentalan}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.kekentalan}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Warna
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("warna", e.target.value)
                                }
                                value={data.warna}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.warna}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Bau
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                placeholder="enter ..."
                                // required
                                onChange={(e) => setData("bau", e.target.value)}
                                value={data.bau}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.bau}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Keasaman
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("keasaman", e.target.value)
                                }
                                value={data.keasaman}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.keasaman}
                            </p>
                        </div>
                        <div className="col-span-4">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Detail Air
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("detail", e.target.value)
                                }
                                value={data.detail}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.detail}
                            </p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="me-1 -ms-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Add New Report
                    </button>
                </form>
            </Popup>
        );
    }
    return (
        <AdminLayout>
            <div className="rounded-t mb-0 px-4 py-3 border-0 ">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-gray-900">
                            Daftar Laporan
                        </h3>
                        {flash.message && (
                            <div
                                className="flex items-center p-4 mb-4 text-sm text-midnight rounded-lg  dark:text-green-500"
                                role="alert"
                            >
                                <svg
                                    className="flex-shrink-0 inline w-4 h-4 me-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">
                                        Success alert!
                                    </span>{" "}
                                    {flash.message}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        {popup}
                    </div>
                </div>
            </div>
            <div></div>
            <div className="overflow-x-auto  ">
                <table className="table">
                    <thead className="bg-gray-950 rounded-md text-white text-center">
                        <tr>
                            <th className=" ">Rasa</th>
                            <th className=" ">Suhu</th>
                            <th className=" ">Kekentalan</th>
                            <th className=" ">Warna</th>
                            <th className=" ">Bau</th>
                            <th className=" ">Keasaman</th>
                            <th className=" ">Detail Air</th>
                            <th className=" ">Status</th>

                            <th className=" " />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {reports.map((report, i) => {
                            return (
                                <tr
                                    className="bg-gray-50 text-gray-800"
                                    key={i}
                                >
                                    <td className="">{report.rasa}</td>
                                    <td className="">{report.suhu}</td>
                                    <td className="">{report.kekentalan}</td>
                                    <td className="">{report.warna}</td>
                                    <td className="">{report.bau}</td>
                                    <td className="">{report.keasaman}</td>
                                    <td className="">{report.detail}</td>

                                    <td className="badge  badge-outline my-16">
                                        {report.status}
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-4">
                                            {role === "admin" && (
                                                <Popup
                                                    modal
                                                    trigger={
                                                        <button className="bg-amber-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                            Edit
                                                        </button>
                                                    }
                                                >
                                                    <form
                                                        className="p-4 md:p-5 bg-slate-400 "
                                                        onSubmit={(e) =>
                                                            updateReport(
                                                                e,
                                                                report.id
                                                            )
                                                        }
                                                    >
                                                        <select
                                                            onChange={(e) => {
                                                                updateStatus(
                                                                    e.target
                                                                        .value
                                                                );
                                                                setData(
                                                                    "status",
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                            className="select w-full max-w-xs"
                                                        >
                                                            <option>
                                                                {selectedStatus}
                                                            </option>
                                                            {status &&
                                                                status.map(
                                                                    (
                                                                        status,
                                                                        i
                                                                    ) => {
                                                                        return (
                                                                            <option
                                                                                key={
                                                                                    i
                                                                                }
                                                                            >
                                                                                {
                                                                                    status
                                                                                }
                                                                            </option>
                                                                        );
                                                                    }
                                                                )}
                                                        </select>
                                                        <button
                                                            className="btn w-full"
                                                            type={"submit"}
                                                        >
                                                            Button
                                                        </button>
                                                    </form>
                                                </Popup>
                                            )}
                                        </div>
                                        <button
                                            onClick={() =>
                                                router.get(
                                                    "/report/" + report.id
                                                )
                                            }
                                            className="btn btn-secondary"
                                        >
                                            Lihat Detail
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
