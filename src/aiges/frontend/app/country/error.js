"use client";

export default function Error({ error, reset }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

            <div className="max-w-md text-center">

                <h1 className="mb-4 text-3xl font-bold">
                    Something went wrong
                </h1>

                <p className="mb-8 text-neutral-400">
                    {error.message}
                </p>

                <button
                    onClick={reset}
                    className="rounded-lg bg-white px-6 py-3 text-black"
                >
                    Try Again
                </button>

            </div>

        </main>
    );
}