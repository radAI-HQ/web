'use client';
import { Disclosure } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link';

export default function page() {
    return (
        <>
            <div className='relative flex flex-col max-w-9xl'>
                <img
                    className="block h-96 w-full z-10 bg-transparent"
                    src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Frame_acOD27yoZ.png?updatedAt=1706944067529"
                    alt="radai"
                />
                <Disclosure as="nav" className="bg-transparent absolute top-5 w-full">
                    {({ open }) => (
                        <>
                            <div className='py-2'>
                            </div>
                            <div className="max-w-9xl flex  flex-col mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                                        src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/Group%2036%20(1)_35dAlF8YM.png?updatedAt=1708599967256"
                                        alt="radai"
                                    />
                                    <p className='text-gray-400 py-2 text-lg'>
                                        Your gateway to instant radiology insights—
                                    </p>
                                </section>
                                <section className='mt-2 py-4 inline-flex  justify-end items-end'>
                                    <h2 className="text-5xl font-extrabold text-white  tracking-tight sm:text-4xl">Your AI Doctor<br /> Companion.</h2>
                                    <img
                                        className=" h-10 w-10 "
                                        src="https://ik.imagekit.io/ubdvpx7xd0j/Radai/teenyicons_chatbot-solid%20(1)_dcUdxNc1i.png?updatedAt=1706944461312"
                                        alt="radai"
                                    />
                                </section>
                            </div>
                        </>
                    )}
                </Disclosure>

                <div className='mx-12 mt-64 flex justify-center bottom z-50'>
                    <div className='flex justify-center items-center flex-col w-full'>
                        <Link href="/home" className='inline-flex font-bold justify-center items-center text-center shadow-lg px-6 py-4 w-full border border-transparent text-base  rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            <button
                                type="button"
                                className=" inline-flex"
                            >
                                <span className='px-2 bg-transparent '> Start </span><ArrowRightIcon className="h-6 w-6  bg-transparent" aria-hidden="true" />
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
