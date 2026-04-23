import { FaCalendarAlt } from "react-icons/fa";

export default function PageHeader() {
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4 mb-4">
      {/* Bagian Kiri: Title & Greeting (Sesuai gambar temanmu) */}
      <div id="pageheader-left" className="flex flex-col">
        <h2 id="page-title" className="text-3xl font-black text-blue-900">Dashboard</h2>
        <p id="greeting-text" className="text-blue-400 text-sm font-semibold mt-1">
          Hi, Samantha. Welcome back to Sedap Admin!
        </p>
      </div>

      {/* Bagian Kanan: Filter Periode (Biar sama kayak temanmu) */}
      <div id="action-button">
        <button 
          id="filter-button" 
          className="flex items-center gap-3 bg-white text-blue-600 px-5 py-2.5 rounded-2xl font-bold shadow-sm border border-blue-50 hover:bg-blue-50 transition-all"
        >
          <div className="bg-blue-100 p-2 rounded-lg">
            <FaCalendarAlt className="text-blue-600 text-sm" />
          </div>
          <span className="text-sm">Filter Periode</span>
        </button>
      </div>
    </div>
  );
}