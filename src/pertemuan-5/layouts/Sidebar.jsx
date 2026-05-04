import { FaHome, FaClipboardList, FaUserFriends, FaPlus } from "react-icons/fa";
// 1. Pastikan importnya NavLink
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Orders", icon: <FaClipboardList />, path: "/orders" },
    { name: "Customers", icon: <FaUserFriends />, path: "/customers" },
  ];

  // --- DI SINI LETAKNYA ---
  // Variabel menuClass diletakkan sebelum 'return' karena dia adalah fungsi pembantu
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 no-underline transition-all
    ${isActive ? 
        "text-hijau bg-green-200 font-extrabold" : 
        "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;
  // ------------------------

  return (
    <aside className="w-64 bg-white border-r border-blue-100 p-4 flex flex-col justify-between min-h-screen">
      <div>
        <div className="mb-10 p-6">
          <h1 className="text-4xl font-black text-blue-900">Sedap<span className="text-hijau">.</span></h1>
          <p className="text-blue-300 text-[10px] font-medium mt-1">Modern Admin Dashboard</p>
        </div>

        <ul className="space-y-4 px-2 list-none">
          {menus.map((m) => (
            <li key={m.name}>
              {/* Cara pakainya tinggal panggil variabel menuClass tadi */}
              <NavLink 
                to={m.path} 
                className={menuClass}
              >
                <span className="text-xl">{m.icon}</span>
                <span>{m.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-600 p-6 rounded-[35px] text-white text-center shadow-lg shadow-blue-200 mb-10">
        <p className="text-[11px] font-semibold italic">Organize your menus here!</p>
        <button className="mt-4 bg-white text-blue-600 w-full py-3 rounded-2xl font-black text-[11px] flex items-center justify-center gap-2">
          <FaPlus /> Add Menus
        </button>
      </div>
    </aside>
  );
}