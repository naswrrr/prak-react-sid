import { 
  FaHome, 
  FaClipboardList, 
  FaUserFriends, 
  FaPlus 
} from "react-icons/fa";

export default function Sidebar() {
  // Menyesuaikan menu dengan gambar referensi temanmu (hanya Dashboard, Orders, Customers)
  const menus = [
    { name: "Dashboard", icon: <FaHome />, active: true },
    { name: "Orders", icon: <FaClipboardList />, active: false },
    { name: "Customers", icon: <FaUserFriends />, active: false },
  ];
  
  return (
    <div className="w-64 bg-white min-h-screen p-4 flex flex-col justify-between border-r border-gray-100">
      <div>
        {/* Logo Section sesuai brand "Sedap" */}
        <div className="mb-10 p-6">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">
            Sedap<span className="text-hijau">.</span>
          </h1>
          <p className="text-gray-400 text-[10px] font-medium mt-1">Modern Admin Dashboard</p>
        </div>

        {/* Navigation Menu */}
        <ul className="space-y-4 px-2">
          {menus.map((item) => (
            <li 
              key={item.name} 
              className={`flex items-center space-x-4 p-3 rounded-2xl cursor-pointer transition-all ${
                item.active 
                ? 'bg-hijau/10 text-hijau font-bold' 
                : 'text-gray-400 hover:bg-gray-50 hover:text-slate-600'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-md font-bold tracking-wide">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Footer - Kartu Hijau Intruksi */}
      <div id="sidebar-footer" className="p-2">
        <div id="footer-card" className="bg-hijau px-5 py-8 rounded-[35px] shadow-xl shadow-hijau/30 mb-8 flex flex-col items-center relative overflow-hidden">
          {/* Dekorasi lingkaran transparan agar persis desain asli */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
          
          <div id="footer-text" className="text-white text-[11px] text-center font-semibold leading-relaxed z-10">
            <p>Please organize your</p>
            <p>menus through button below!</p>
          </div>
          
          <div id="add-menu-button" className="flex justify-center items-center py-3 mt-6 bg-white rounded-2xl space-x-2 w-full cursor-pointer shadow-sm hover:scale-105 transition-transform">
            <FaPlus className="text-slate-800 text-[10px]" />
            <span className="text-slate-800 font-extrabold text-[11px]">Add Menus</span>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="text-center pb-2">
          <span className="font-bold text-slate-800 block text-[11px]">Sedap Restaurant</span>
          <p className="font-medium text-gray-400 text-[9px] mt-1">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}