import { Fragment, useState, useRef } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { useAppDispatch, useAppSelector } from "../../features/store";
import { closeItem } from '@/features/utils';



export default function Example() {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const dispatch = useAppDispatch()
    const videos = useAppSelector((state) => state.utils.videos)

    const closeModal = () => {
        setOpen(false)
        dispatch(closeItem(null))
    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={setOpen} initialFocus={cancelButtonRef}
            >
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y- sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="relative inline-block align-center align-middle md:max-w-7xl  bg-white rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4  bg-white z-40">
                                <button
                                    type="button"
                                    className="bg-white rounded-md text-black    "
                                    onClick={() => closeModal()}
                                >
                                    <span className="sr-only">Close</span>
                                    <XIcon className="h-6 w-6 bg-white " aria-hidden="true" />
                                </button>
                            </div>
                            <div>

                                <div className="relative  bg-white  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                                    <div className="absolute inset-0 bg-white">
                                        <div className="h-1/3 sm:h-2/3 bg-white" />
                                    </div>
                                    <div className="relative max-w-7xl mx-auto bg-white">
                                        <div className="text-center bg-white">
                                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl bg-white">Radiologist Forum</h2>
                                            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 bg-white">
                                                Learn about the Latest Radiological Advancements in the health sector
                                            </p>
                                        </div>
                                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none bg-white">
                                            {videos.map((post: any) => (
                                                <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                                                    <div className="flex-shrink-0 bg-white">
                                                        <iframe width="400" height="300" src={post.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                                    </div>
                                                    <div className="flex-1 bg-white py-5">
                                                        <a href={post.title} className="block mt-2 ">
                                                            <p className="text-xl font-semibold text-gray-900 bg-white px-2">{post.title}</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
