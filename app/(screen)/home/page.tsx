'use client';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    HomeIcon,
    MapIcon,
    MenuAlt2Icon,
    SpeakerphoneIcon,
    XIcon,
} from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Announcements', href: '#', icon: SpeakerphoneIcon, current: false },
    { name: 'Map', href: '#', icon: MapIcon, current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
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
                                                    <p className="text-base font-medium text-white group-hover:text-white">Radai</p>
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
                                                <p className="text-sm font-medium text-white">Radai</p>
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
                            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                                <div className=" py-6 px-4 sm:px-6 lg:px-8 text-white">
                                    <p className='text-white'>Hello world</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default page