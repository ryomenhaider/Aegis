import CountrySearch from "@/components/country/CountrySearch";

export const metadata = {
    title: "Country Intelligence",
};

export default function CountryPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
            <div className="w-full max-w-4xl text-center">

                <h1 className="mb-4 text-5xl font-bold">
                    Country Intelligence
                </h1>

                <p className="mb-12 text-neutral-400">
                    Search any ISO Alpha-3 country code.
                </p>

                <CountrySearch />

            </div>
        </main>
    );
}