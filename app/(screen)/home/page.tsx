'use client';
import { Tab } from '@headlessui/react'
import { ArrowUpIcon } from '@heroicons/react/outline';
import { CameraIcon, LinkIcon, MicrophoneIcon } from '@heroicons/react/solid'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const page = () => {
    return (
        <div className='flex justify-center items-center max-w-9xl max-w-9xl flex-col mx-auto px-4 sm:px-6 lg:px-8  '>
            <form className='w-full  bg-white shadow-lg py-3 px-5 rounded-lg'>
                <Tab.Group>
                    {({ selectedIndex }) => (
                        <>
                            <Tab.List className="flex items-center w-full">
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            selected
                                                ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                                : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                                            'px-3 py-1.5 border border-transparent text-sm font-medium rounded-md'
                                        )
                                    }
                                >
                                    Write
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            selected
                                                ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                                : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                                            'ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md'
                                        )
                                    }
                                >
                                    Preview
                                </Tab>

                                {/* These buttons are here simply as examples and don't actually do anything. */}
                                {selectedIndex === 0 ? (
                                    <div className="ml-auto flex items-center space-x-5">
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="sr-only">Insert link</span>
                                                <LinkIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="sr-only">Insert code</span>
                                                <CameraIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="sr-only">Voice to Test</span>
                                                <MicrophoneIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                ) : null}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">

                                    <div>
                                        <textarea
                                            rows={3}
                                            name="text"
                                            id="text"
                                            className="shadow-sm p-3 outilne-none border-2 focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Your Radiologist AI, Companion..."
                                            defaultValue={''}
                                        />
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                                    <div className="border-b">
                                        <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                                            Preview content will render here.
                                        </div>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </>
                    )}
                </Tab.Group>
                <div className="mt-2 flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center px-2 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <ArrowUpIcon className='h-5 w-5' />
                    </button>
                </div>
            </form>
        </div>

    )
}

export default page