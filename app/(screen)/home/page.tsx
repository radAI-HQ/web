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
} from '@heroicons/react/outline'
import { TypeAnimation } from 'react-type-animation';
import { RadialTextGradient } from "react-text-gradients-and-animations";
import axios from 'axios';
import { useAppDispatch, useAppSelector } from "../../../features/store"
import { addChat } from '@/features/utils';
import { Bars } from "@agney/react-loading";


const navigation = [
    { name: 'Home', href: '/home', icon: HomeIcon, current: true },
    { name: 'Announcements', href: '#', icon: SpeakerphoneIcon, current: false },
    { name: 'Map', href: 'https://www.google.com/maps/dir/6.6207907,3.3086788/Radiology,+1-5+Oba+Akinjobi+Way,+Ikeja,+Lagos+101233,+Lagos/@6.6072748,3.3050182,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103b9221b8465467:0x48a958aba0f0d779!2m2!1d3.3422326!2d6.5901223?entry=ttu', icon: MapIcon, current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const Page = () => {
    const dispatch = useAppDispatch()
    const chats = useAppSelector((state) => state.utils.chat)
    const videos = useAppSelector((state) => state.utils.videos)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [loading, setLoading] = useState(false)

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
                                                        target='_blank'
                                                        className={classNames(
                                                            item.current
                                                                ? 'text-white'
                                                                : 'text-white ',
                                                            'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer group-hover:text-gray-500'
                                                        )}
                                                    >
                                                        <item.icon
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
                                                    target='_blank'
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-white'
                                                            : 'text-white ',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer group-hover:text-gray-500'
                                                    )}
                                                >
                                                    <item.icon
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
                                <div className=" py-6 px-4 sm:px-6 lg:px-8 text-white -z-10 ">
                                    <RadialTextGradient
                                        className='text-3xl font-bold my-4 lg:text-6xl lg:font-extrabold fade'
                                        shape={"ellipse"}
                                        position={"left"}
                                        colors={["#FF00FF", "#363AED", "#E6E6FA"]}
                                        animate={true}
                                        animateDirection={"horizontal"}
                                        animateDuration={20}
                                    >
                                        Your Radiology AI Companion..
                                    </RadialTextGradient>
                                </div>
                                <div>
                                    <TypeAnimation
                                        preRenderFirstString={true}
                                        sequence={[
                                            500,
                                            'AI Model, Prompt anything Radiology.',
                                            1000,
                                            'AI Model, Connecting Radiologist Together.',
                                            1000,
                                            'AI Model, Trained Models with X-Ray & Tumor Scans.',
                                            1000,
                                            'AI Model, Realiable and Futuristic AI Technology.',
                                            500,
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
                                                                <p className="mx-2 text-sm leading-6 font-medium text-white">{e.main.message}</p>
                                                            </div>
                                                        </div>
                                                    </Suspense>
                                                    <Suspense fallback={<div />} key={e.resbot.type}>
                                                        <div className='flex items-center justify-end rounded-md text-white w-full' >
                                                            <img
                                                                className="inline-block h-10 w-10 rounded-full"
                                                                src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Light%20Version_qIXTVimd7.png?updatedAt=1708679749597"
                                                                alt="radai"
                                                            />
                                                            <p className=" p-3 rounded-md mx-2 text-sm leading-6 font-medium text-white">
                                                                <TypeAnimation
                                                                    preRenderFirstString={true}
                                                                    sequence={[
                                                                        500,
                                                                        `${e.resbot.message}`,
                                                                    ]}
                                                                    speed={60}
                                                                    style={{ fontSize: '1em' }}
                                                                    repeat={Infinity}
                                                                    className='py-4 text-white bg-transparent'
                                                                />
                                                            </p>
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

        </>
    )
}

export default Page