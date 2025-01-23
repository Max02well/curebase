import { Head, Link } from "@inertiajs/react";
import { Leaf, BookOpen, ChevronRight, ShieldCheck, Globe } from "lucide-react";

export default function CurebaseWelcome({ auth }) {
    const handleImageError = () => {
        document
            .getElementById("hero-image-container")
            ?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Curebase - Natural Healing Solutions" />

            <div className="bg-[#F5F5F0] text-green-900 dark:bg-green-950 dark:text-green-100">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-green-600 selection:text-white">
                    <div className="relative w-full max-w-6xl px-6">
                        <header className="grid grid-cols-2 items-center justify-between  gap-2 py-10 lg:grid-cols-3">
                            <div className="flex gap-2 lg:col-span-2 mr-20 lg:justify-between">
                                <Leaf
                                    className="h-12 w-16 ml-5 text-green-700 dark:text-green-500"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 bg-green-100 text-teal-800 hover:bg-green-200 transition"
                                    >
                                        Your Account
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-green-800 hover:bg-green-100 transition mr-2"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 bg-green-600 text-white hover:bg-green-700 transition"
                                        >
                                            Join Curebase
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                                <div className="flex flex-col justify-center space-y-6">
                                    <h1 className="text-4xl font-bold text-green-900 dark:text-green-100">
                                        Healing Naturally,
                                        <br />
                                        Holistically, Mindfully
                                    </h1>
                                    <p className="text-lg text-green-700 dark:text-green-300">
                                        Discover nature's powerful remedies.
                                        Curebase combines traditional wisdom
                                        with modern scientific research to
                                        support your wellness journey.
                                    </p>
                                    <div className="flex space-x-4">
                                        <Link
                                            href="/remedies"
                                            className="flex items-center rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition"
                                        >
                                            Explore Remedies
                                            <ChevronRight className="ml-2 h-5 w-5" />
                                        </Link>
                                        <Link
                                            href="/about"
                                            className="flex items-center rounded-lg border border-green-600 px-6 py-3 text-green-700 hover:bg-green-50 transition"
                                        >
                                            Our Philosophy
                                        </Link>
                                    </div>
                                </div>

                                <div
                                    id="hero-image-container"
                                    className="relative flex items-center justify-center"
                                >
                                    <img
                                        src="/api/placeholder/600/400"
                                        alt="Natural herbal remedies"
                                        className="rounded-xl shadow-2xl"
                                        onError={handleImageError}
                                    />
                                </div>
                            </div>

                            <div className="mt-16 grid gap-6 md:grid-cols-3">
                                <div className="bg-white dark:bg-green-900 p-6 rounded-xl shadow-md">
                                    <BookOpen className="h-10 w-10 text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">
                                        Herbal Knowledge
                                    </h3>
                                    <p className="text-green-700 dark:text-green-300">
                                        In-depth guides and research on herbal
                                        remedies, backed by traditional wisdom
                                        and modern science.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-green-900 p-6 rounded-xl shadow-md">
                                    <ShieldCheck className="h-10 w-10 text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">
                                        Quality Assured
                                    </h3>
                                    <p className="text-green-700 dark:text-green-300">
                                        Rigorous testing and sourcing to ensure
                                        the highest quality natural remedies and
                                        supplements.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-green-900 p-6 rounded-xl shadow-md">
                                    <Globe className="h-10 w-10 text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">
                                        Sustainable Wellness
                                    </h3>
                                    <p className="text-green-700 dark:text-green-300">
                                        Environmentally conscious practices that
                                        support both human and planetary health.
                                    </p>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-green-800 dark:text-green-300">
                            © {new Date().getFullYear()} Curebase. Nurturing
                            Wellness Naturally.
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
