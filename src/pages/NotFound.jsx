import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      {/* 404 dibuat lebih gelap (blue-200) dan tegas */}
      <h1 className="text-[150px] font-black text-blue-200 leading-none opacity-50 drop-shadow-md">
        404
      </h1>
      
      <div className="-mt-16 relative z-10">
        <h2 className="text-4xl font-black text-blue-900 drop-shadow-sm">
          Waduh, Kesasar!
        </h2>
        <p className="text-slate-500 mt-3 font-semibold text-lg">
          Halaman yang kamu cari nggak ada di menu kami.
        </p>
        
        {/* Tombol balik ke home */}
        <div className="mt-8">
          <Link 
            to="/" 
            className="bg-hijau text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-green-200 hover:scale-105 transition-all no-underline inline-block"
          >
            Cus balek Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}