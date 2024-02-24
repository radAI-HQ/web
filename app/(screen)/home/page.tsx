'use client';
import React, { Fragment, useState, Suspense } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    HomeIcon,
    MapIcon,
    MenuAlt2Icon,
    SpeakerphoneIcon,
    PaperAirplaneIcon,
    XIcon,
    AcademicCapIcon,
    UserAddIcon
} from '@heroicons/react/outline'
import { TypeAnimation } from 'react-type-animation';
import { RadialTextGradient } from "react-text-gradients-and-animations";
import axios from 'axios';
import { useAppDispatch, useAppSelector } from "../../../features/store"
import { showItem, addChat } from '@/features/utils';
import { Bars } from "@agney/react-loading";
import Modal from "../../comps/Pop"
import Login from "../../comps/Login"


const navigation = [
    { name: 'Home', href: '/home', icon: HomeIcon, current: true },
    { name: 'Announcements', href: '', icon: SpeakerphoneIcon, current: false },
    { name: 'Map', href: 'https://www.google.com/maps/', icon: MapIcon, current: false },
    { name: 'Educate', ref: '', icon: AcademicCapIcon, current: false },
    { name: 'User(Coming Soon..)', href: '', icon: UserAddIcon, current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const Page = () => {
    const dispatch = useAppDispatch()
    const chats = useAppSelector((state) => state.utils.chat)
    const show = useAppSelector((state) => state.utils.show)

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const onEducate = () => {
        dispatch(showItem("educate"))
    }



    const [value, setValue] = useState({
        text: ""
    })

    const { text } = value
    const onChange = (e: any) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (text === "") {
            return
        }
        setValue({ text: '' });
        setLoading(true)

        let data = JSON.stringify({
            "session_id": process.env.NEXT_PUBLIC_SESSION_ID,
            "question": text
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://api.autogon.ai/api/v1/services/chatbot/${process.env.NEXT_PUBLIC_AGENT_ID}/chat/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                dispatch(addChat({
                    main: {
                        message: text,
                        type: "user"
                    },
                    resbot: {
                        message: JSON.stringify(response.data.data.bot_response),
                        type: "bot"
                    }
                }))

                setLoading(false)
            })
            .catch((error) => {
                console.log(error.response.data);
            });

    }

    return (
        <>
            <>
                <div className="h-full flex">
                    <Transition.Root show={sidebarOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                            </Transition.Child>
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <div className="relative flex-1 flex flex-col max-w-xs w-full focus:outline-none bg-none">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2 bg-none bg-transparent">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-transparent"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon className="h-6 w-6 text-white  bg-transparent" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                        <div className="flex-shrink-0 flex items-center px-4">

                                            <div className='inline-flex items-center justify-center '>
                                                <img
                                                    className="h-10 w-auto px-2"
                                                    src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Svg%20Hash%20(2)_nt_EDDYiS.png?updatedAt=1708601573467"
                                                    alt="radai"
                                                />
                                                <img
                                                    className="h-10 w-auto"
                                                    src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/RadAi_MeIIoZewl.png?updatedAt=1708618882575"
                                                    alt="radai"
                                                />

                                            </div>
                                        </div>
                                        <nav aria-label="Sidebar" className="mt-5">
                                            <div className="px-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'text-white'
                                                                : 'text-white ',
                                                            'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer group-hover:text-gray-500'
                                                        )}
                                                        onClick={() => item?.name === 'Educate' && onEducate()}

                                                    >
                                                        <item.icon
                                                            onClick={() => item?.name === 'Educate' && onEducate()}
                                                            className={classNames(
                                                                item.current ? 'text-white group-hover:text-gray-500' : 'text-white group-hover:text-gray-500 ',
                                                                'mr-4 h-6 w-6 cursor-pointer'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="flex-shrink-0 flex  p-4">
                                        <a href="#" className="flex-shrink-0 group block">
                                            <div className="flex items-center">
                                                <div>
                                                    <img
                                                        className="inline-block h-10 w-10 rounded-full"
                                                        src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/image%20118_iuFOihe50.png?updatedAt=1708616403272"
                                                        alt="radai"
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-base font-medium text-white group-hover:text-white">Radai User</p>
                                                    <p className="text-sm font-medium text-white group-hover:text-white">View </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Force sidebar to shrink to fit close icon */}
                            </div>
                        </Dialog>
                    </Transition.Root>

                    {/* Static sidebar for desktop */}
                    <div className="hidden lg:flex lg:flex-shrink-0">
                        <div className="flex flex-col w-64">
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex-1 flex flex-col min-h-0 ">
                                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                    <div className="flex items-center flex-shrink-0 px-4">
                                        <div className='inline-flex items-center justify-center '>
                                            <img
                                                className="h-10 w-auto px-2"
                                                src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Svg%20Hash%20(2)_nt_EDDYiS.png?updatedAt=1708601573467"
                                                alt="radai"
                                            />
                                            <img
                                                className="h-10 w-auto"
                                                src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/RadAi_MeIIoZewl.png?updatedAt=1708618882575"
                                                alt="radai"
                                            />
                                        </div>
                                    </div>
                                    <nav className="mt-5 flex-1" aria-label="Sidebar">
                                        <div className="px-2 space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-white'
                                                            : 'text-white ',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer group-hover:text-gray-500'
                                                    )}
                                                    onClick={() => item?.name === 'Educate' && onEducate()}
                                                >
                                                    <item.icon
                                                        onClick={() => item?.name === 'Educate' && onEducate()}
                                                        className={classNames(
                                                            item.current ? 'text-white group-hover:text-gray-500' : 'text-white group-hover:text-gray-500 ',
                                                            'mr-4 h-6 w-6 cursor-pointer'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                                <div className="flex-shrink-0 absolute bottom-0  p-4">
                                    <a href="#" className="flex-shrink-0 w-full group block">
                                        <div className="flex items-center">
                                            <div>
                                                <img
                                                    className="inline-block h-10 w-10 rounded-full"
                                                    src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/image%20118_iuFOihe50.png?updatedAt=1708616403272"
                                                    alt="radai"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-white">Radai User</p>
                                                <p className="text-xs font-medium text-white">View</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1 overflow-hidden bg-transparent">
                        <div className="lg:hidden">
                            <div className="flex items-center justify-between px-4 py-1.5">
                                <div className='inline-flex items-center justify-center '>
                                    <img
                                        className="h-10 w-auto px-2"
                                        src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Svg%20Hash%20(2)_nt_EDDYiS.png?updatedAt=1708601573467"
                                        alt="radai"
                                    />
                                    <img
                                        className="h-10 w-auto"
                                        src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/RadAi_MeIIoZewl.png?updatedAt=1708618882575"
                                        alt="radai"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:text-gray-500"
                                        onClick={() => setSidebarOpen(true)}
                                    >
                                        <span className="sr-only">Open sidebar</span>
                                        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 overflow-hidden">
                                <div className=" py-6 text-white -z-10 inline-flex justify-center items-center flex-row ">
                                    <img
                                        className=" h-10 w-10 rounded-full mx-2 hidden lg:block"
                                        src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Light%20Version_qIXTVimd7.png?updatedAt=1708679749597"
                                        alt="radai"
                                    />
                                    <img
                                        className="block h-24 mx-2"
                                        src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Group%2036%20(1)_35dAlF8YM.png?updatedAt=1708599967256"
                                        alt="radai"
                                    />
                                </div>
                                <div className=''>
                                    <TypeAnimation
                                        preRenderFirstString={true}
                                        sequence={[
                                            500,
                                            'AI Model, Prompt for anything Radiology.',
                                            1000,
                                            'AI Model, Trained Models with X-Ray & Tumor Scans.',
                                        ]}
                                        speed={60}
                                        style={{ fontSize: '1em' }}
                                        repeat={Infinity}
                                        className='py-4 text-white bg-transparent'
                                    />
                                </div>

                                <div className='mb-40 snap-y'>
                                    <div className="left-0 bg-transparent  m-2 max-w-7xl">
                                        <dt>
                                            {chats && chats.map((e) => (
                                                <>
                                                    <Suspense fallback={<div />} key={e.main.type}>
                                                        <div className="flex items-center justify-start w-full rounded-md text-white z-50">
                                                            <img
                                                                className="inline-block h-10 w-10 rounded-full"
                                                                src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/image%20118_iuFOihe50.png?updatedAt=1708616403272"
                                                                alt="radai"
                                                            />
                                                            <div className='p-2 rounded-md'>
                                                                <p className="mx-2 text-sm leading-6 font-medium text-white">{e.main.message.replaceAll("*", "")}</p>
                                                            </div>
                                                        </div>
                                                    </Suspense>
                                                    <Suspense fallback={<div />} key={e.resbot.type}>
                                                        <div className='flex lg:items-center justify-start  lg:flex-row lg:justify-end rounded-md text-white w-full py-2' >
                                                            <img
                                                                className="inline-block h-10 w-10 rounded-full"
                                                                src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Light%20Version_qIXTVimd7.png?updatedAt=1708679749597"
                                                                alt="radai"
                                                            />
                                                            <div className='p-2 rounded-md'>
                                                                <p className=" p-3 text-sm leading-6 font-medium text-white">
                                                                    {e.resbot.message.split('\n\n').map(obj => JSON.parse(obj.trim()))}
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </Suspense>
                                                </>
                                            ))}
                                            {loading && (
                                                <Bars
                                                    className=" text-purple-600 text-center"
                                                    width="20"
                                                />
                                            )}
                                        </dt>
                                    </div>


                                </div>

                                <div className='fixed bottom-0 w-full lg:w-5/6 flex justify-center items-center  py-4 px-4 sm:px-6'>
                                    <div className="border-2 w-full lg:w-5/6  rounded-xl shadow-sm overflow-hidden border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                        <label htmlFor="description" className="sr-only">
                                            Ask What you need to know
                                        </label>
                                        <textarea
                                            rows={2}
                                            name="text"
                                            onChange={onChange}
                                            value={text}
                                            id="text"
                                            className=" border-3 py-2 px-2 w-full outline-none  placeholder-white  sm:text-sm text-white"
                                            placeholder="Your AI Doctor Companion..."
                                            defaultValue={''}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={onSubmit}
                                        className="inline-flex mx-2 items-center bg-transparent border-2 border-indigo-500  cursor-pointer px-6 py-4 text-base font-medium rounded-md shadow-sm text-white outline-none "
                                    >
                                        <PaperAirplaneIcon className='w-8 h-8 text-white  bg-transparent cursor-pointer ' />
                                    </button>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
            {
                show === "educate" && (<Modal />)
            }
            {
                show === "login" && (<Login />)
            }
        </>
    )
}

export default Page