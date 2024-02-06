'use client';
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export default function page() {
    return (
        <>
            <div className='relative max-w-7xl'>
                <img
                    className="block h-96 w-full"
                    src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Frame_acOD27yoZ.png?updatedAt=1706944067529"
                    alt="radai"
                />
                <Disclosure as="nav" className="bg-transparent absolute top-5 w-full">
                    {({ open }) => (
                        <>
                            <div className='py-2'>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between h-24">
                                    <div className="flex">
                                        <div className="flex-shrink-0 flex items-center">
                                            <img
                                                className="block h-12 w-auto"
                                                src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Frame%2034@2x%20(1)_nqyvk7YJd.png?updatedAt=1706944108616"
                                                alt="radai"
                                            />
                                        </div>
                                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                                        </div>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                        <div className='px-2'>
                                            <img
                                                className="w-28"
                                                src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Frame%2035_VTWcSHcgB.png?updatedAt=1706945752316"
                                                alt=""
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                    </div>
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <div>
                                            <img
                                                className="w-24"
                                                src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Frame%2035_VTWcSHcgB.png?updatedAt=1706945752316"
                                                alt=""
                                            />
                                        </div>

                                    </div>
                                </div>
                                <section className='mt-2 py-4'>
                                    <img
                                        className="block md:h-1/2 md:w-1/2"
                                        src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Group%2036_h_c3SbK9M.png?updatedAt=1706944089177"
                                        alt="radai"
                                    />
                                    <p className='text-gray-400 py-2 text-lg'>
                                        Your gateway to instant radiology insights—
                                    </p>
                                </section>

                                <section className=' absolute bottom-2 flex justify-center items-center flex-col w-full '>
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-6 py-3 w-full border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Next
                                        </button>
                                    </div>


                                </section>
                            </div>


                        </>
                    )}
                </Disclosure>


            </div>
        </>
    )
}
