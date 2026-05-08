import { Link } from "react-router-dom";

// Menerima props: code, description, dan image (bisa icon atau emoji)
export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      {/* Gambar / Icon Error */}
      <div className="text-8xl mb-4 animate-bounce">
        {image}
      </div>

      {/* Angka Kode Error Besar di Background */}
      <h1 className="text-[120px] font-black text-blue-50 leading-none absolute -z-10 opacity-50">
        {code}
      </h1>
      
      <div className="relative z-10">
        <h2 className="text-4xl font-black text-blue-900 uppercase">
          Error {code}
        </h2>
        <p className="text-slate-500 mt-4 max-w-sm font-medium text-lg">
          {description}
        </p>
        
        <Link 
          to="/" 
          className="mt-10 inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-100 hover:scale-105 transition-all no-underline"
        >
          CUSS BALEK DASHBOARD
        </Link>
      </div>
    </div>
  );
}