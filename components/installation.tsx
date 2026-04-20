import Link from "next/link"

export default function Installation() {
    return (
        <section id="installation" className="w-full px-5 overflow-hidden flex flex-col justify-start items-center py-6 md:py-8 lg:py-14">
            <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col justify-start items-center gap-4 max-w-2xl text-center">
                    <h2 className="text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
                        Installation
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-lg font-medium">
                        Get started with BetterCF by installing the extension on your favorite browser.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-sm transition-all flex items-center justify-center gap-2">
                            Install for Chrome
                        </Link>
                        <Link href="https://addons.mozilla.org/" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-medium shadow-sm transition-all flex items-center justify-center gap-2">
                            Install for Firefox
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}