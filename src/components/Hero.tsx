/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    return (
        <>
            <section>
                <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
                            Testing pages{" "}
                            <span className="text-gray-600">
                                one repo at a time
                            </span>
                        </h1>
                        <p className="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
                            I haven't got a clue what I'm doing :sob:
                        </p>
                        <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
                            <button
                                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                aria-label="Primary action"
                            >
                                Primary button
                            </button>
                            <button
                                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                aria-label="Secondary action"
                            >
                                Secondary button
                            </button>
                        </div>
                        <div className="relative h-full p-2 mt-24 overflow-hidden border rounded-3xl">
                            <img
                                src="https://cdn4.kars.bio/designs/dash-crypto-2.png"
                                className="object-cover h-full border shadow-2xl rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
