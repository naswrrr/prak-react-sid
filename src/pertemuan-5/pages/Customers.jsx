import PageHeader from "../components/PageHeader";

export default function Customers() {
  return (
    <div id="customers-page" className="p-4">
      {/* Header Halaman */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Customer</h1>
          <p className="text-slate-400 text-sm mt-1">Dashboard / Customer List</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-colors">
          Add New Customer
        </button>
      </div>

      {/* Konten Utama (Box Putih) */}
      <div className="bg-white p-10 rounded-[30px] shadow-sm border border-blue-50">
        <p className="text-slate-500 font-medium">Ini Halaman Customer</p>
        {/* Nanti di sini kamu bisa tambah tabel data customer */}
      </div>
    </div>
  );
}