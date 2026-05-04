export default function Orders() {
  return (
    <div id="orders-page" className="p-4">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Orders</h1>
          <p className="text-slate-400 text-sm mt-1">Dashboard / Order List</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-colors">
          Create New Order
        </button>
      </div>

      <div className="bg-white p-10 rounded-[30px] shadow-sm border border-blue-50">
        <p className="text-slate-500 font-medium">Ini Halaman Orders</p>
      </div>
    </div>
  );
}