import { FaChartBar, FaUtensils } from "react-icons/fa";
// 1. Import PageHeader-nya
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  const chartData = [
    { day: "Mon", val: "60%", col: "bg-blue-400" },
    { day: "Tue", val: "80%", col: "bg-cyan-400" },
    { day: "Wed", val: "40%", col: "bg-blue-600" },
    { day: "Thu", val: "90%", col: "bg-sky-400" },
    { day: "Fri", val: "70%", col: "bg-blue-300" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        breadcrumb="Hi, Samantha. Welcome back to Sedap Admin!"
      />

      {/* Stats Cards dan sisanya tetap sama di bawah ini */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Tambahkan px-4 di atas agar sejajar dengan padding PageHeader */}
        {[
          { label: "Total Orders", val: "75", icon: "📄", bg: "bg-blue-50" },
          { label: "Delivered", val: "357", icon: "📦", bg: "bg-cyan-50" },
          { label: "Canceled", val: "65", icon: "🚫", bg: "bg-indigo-50" },
          { label: "Revenue", val: "$128", icon: "💰", bg: "bg-sky-50" },
        ].map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-[35px] shadow-sm border border-blue-50 flex items-center space-x-4">
            <div className={`${card.bg} p-4 rounded-2xl text-2xl`}>{card.icon}</div>
            <div><p className="text-2xl font-black text-blue-900">{card.val}</p><p className="text-blue-300 text-xs font-bold uppercase">{card.label}</p></div>
          </div>
        ))}
      </div>

      {/* Chart & Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* Tambahkan px-4 juga di sini */}
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-blue-50">
          <h3 className="font-black text-blue-900 text-xl flex items-center gap-2 mb-8"><FaChartBar /> Blue Progress</h3>
          <div className="flex items-end justify-between h-40 gap-3 px-2">
            {chartData.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-2 w-full">
                <div className={`${d.col} w-full rounded-t-2xl`} style={{ height: d.val }}></div>
                <span className="text-[10px] font-bold text-blue-300">{d.day}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-blue-50">
          <h3 className="font-black text-blue-900 text-xl flex items-center gap-2 mb-6"><FaUtensils /> Recent Treats</h3>
          <table className="w-full text-sm font-bold text-blue-900">
            <tbody>
              <tr className="border-b border-blue-50"><td className="py-4">Ahmad Dhani</td><td className="py-4 text-blue-400">Blueberry Pie</td><td className="text-right text-blue-600">FRESH</td></tr>
              <tr><td className="py-4">Siti Badriah</td><td className="py-4 text-cyan-500">Icy Lemon</td><td className="text-right text-cyan-600">COLD</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}