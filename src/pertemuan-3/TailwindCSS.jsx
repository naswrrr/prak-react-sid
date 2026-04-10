export default function TailwindCSS() {
    return (
        <div className="min-h-screen bg-slate-50">
            <FlexboxGrid/>

            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-extrabold text-blue-950 tracking-tight mb-6">
                    Belajar Tailwind <span className="text-blue-600">CSS 4</span>
                </h1>

                <button className="bg-blue-950 text-blue-100 font-semibold
                               px-8 py-3 rounded-xl
                               shadow-md hover:shadow-blue-900/20 hover:-translate-y-0.5
                               transition-all duration-300 active:scale-95">
                    Click Me
                </button>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
                <Spacing/>
                <ShadowEffects/>
            </div>

            <div className="max-w-4xl mx-auto pb-20">
                <Typography/>
                <div className="flex items-center space-x-2 p-4">
                    <BorderRadius/>
                </div>
                <BackgroundColors/>
            </div>
        </div>
    )
}

function Spacing(){
    return (
        <div className="bg-blue-950 shadow-xl shadow-blue-900/10 p-8 m-4 rounded-2xl 
                        hover:shadow-2xl transition-all duration-500 border border-blue-900">
            <h2 className="text-white text-xl font-bold">Card Title</h2>
            <p className="mt-3 text-blue-200/80 leading-relaxed">
                Ini adalah contoh penggunaan padding dan margin di Tailwind dengan visual yang lebih modern.
            </p>
        </div>
    )
}

function Typography(){
    return (
        <div className="m-4 p-8 bg-white rounded-2xl border border-slate-100">
            <h1 className="text-3xl font-black text-blue-950 tracking-tighter transition">
                Tailwind Typography
            </h1>
            <p className="text-slate-500 text-lg mt-3 leading-relaxed">
                Belajar Tailwind sangat menyenangkan dan cepat! Utiliti kelas memudahkan kita mengatur segalanya.
            </p>
        </div>
    )
}

function BorderRadius(){
    return (
        <div className="flex p-1 bg-slate-200 rounded-2xl ml-4">
            <button className="text-blue-950 font-bold px-6 py-2 rounded-xl bg-white shadow-sm
                               hover:text-blue-700 transition duration-300">
                Klik Saya
            </button>

            <button className="text-blue-900 font-medium px-6 py-2 rounded-xl
                               hover:text-blue-950 transition duration-300">
                Klik Saya
            </button>
        </div>
    )
}

function BackgroundColors(){
    return(
        <div className="m-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100
                        relative overflow-hidden group">
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-blue-950">Tailwind Colors</h3>
                <p className="mt-2 text-slate-600">Belajar Tailwind itu seru dan fleksibel!</p>
            </div>
            {/* Aksen warna yang tidak alay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between items-center bg-white border-b border-slate-100 px-8 py-5 sticky top-0 z-50">
            <h1 className="text-xl font-black text-blue-950 tracking-tighter uppercase">
                My<span className="text-blue-600">Website</span>
            </h1>

            <ul className="flex items-center space-x-8 text-sm font-semibold text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
                <li className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all cursor-pointer font-bold">
                    Logout
                </li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-sm p-8 m-4 rounded-2xl border border-slate-100
                        hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1
                        transition-all duration-300 group cursor-pointer">
            <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-600 transition">Hover me!</h3>
            <p className="text-slate-500 mt-2">
                Lihat efek bayangan halus saat kartu ini berinteraksi.
            </p>
        </div>
    )
}