import { 
  FaHome, 
  FaClipboardList, 
  FaUserFriends, 
  FaPlus,
  FaExclamationTriangle, 
  FaBoxOpen,
  FaLayerGroup,
  FaPuzzlePiece,
  FaRegStickyNote
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // 1. Menu Utama
  const mainMenus = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Orders", icon: <FaClipboardList />, path: "/orders" },
    { name: "Customers", icon: <FaUserFriends />, path: "/customers" },
    { name: "Products", icon: <FaBoxOpen />, path: "/products" },
    { name: "Components", icon: <FaLayerGroup />, path: "/components" },
    { name: "Fitur XYZ", icon: <FaPuzzlePiece />, path: "/fitur-xyz" },
    { name: "Notes", icon: <FaRegStickyNote />, path: "/notes" }
  ];

  // 2. Menu Error
  const errorMenus = [
    { name: "Error 400", icon: <FaExclamationTriangle />, path: "/error-400" },
    { name: "Error 401", icon: <FaExclamationTriangle />, path: "/error-401" },
    { name: "Error 403", icon: <FaExclamationTriangle />, path: "/error-403" },
  ];

  // KEMBALI KE TEMA HIJAU KAMU
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-3 no-underline transition-all
    ${isActive ? 
        "text-hijau bg-green-200 font-extrabold shadow-sm" : 
        "text-gray-500 hover:text-hijau hover:bg-green-100 font-bold"
    }`;

  return (
    <aside className="w-64 bg-white border-r border-blue-50 p-4 flex flex-col justify-between min-h-screen">
      <div>
        {/* Logo */}
        <div className="mb-10 p-6">
          <h1 className="text-4xl font-black text-blue-900">
            Sedap<span className="text-hijau">.</span>
          </h1>
          <p className="text-blue-300 text-[10px] font-medium mt-1 uppercase tracking-widest">
            Modern Admin Dashboard
          </p>
        </div>

        {/* LIST MENU UTAMA */}
        <ul className="space-y-2 px-2 list-none mb-6">
          {mainMenus.map((m) => (
            <li key={m.name}>
              <NavLink to={m.path} className={menuClass}>
                <span className="text-xl">{m.icon}</span>
                <span>{m.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* --- PEMISAH SYSTEM ERROR (Sesuai Gambar) --- */}
        <div className="px-6 mb-4 mt-8">
          <hr className="border-blue-50 mb-6" />
          <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em] italic">
            System Error
          </p>
        </div>
        {/* ----------------------------------------------- */}

        {/* LIST MENU ERROR */}
        <ul className="space-y-2 px-2 list-none">
          {errorMenus.map((m) => (
            <li key={m.name}>
              <NavLink to={m.path} className={menuClass}>
                <span className="text-xl">{m.icon}</span>
                <span>{m.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Banner Bawah Tetap Sama */}
      <div className="bg-blue-600 p-6 rounded-[35px] text-white text-center mb-6 shadow-xl shadow-blue-100">
        <p className="text-[11px] font-semibold italic">Organize your menus here!</p>
        <button className="mt-4 bg-white text-blue-600 w-full py-3 rounded-2xl font-black text-[11px] flex items-center justify-center gap-2 hover:bg-blue-50 transition-all">
          <FaPlus /> Add Menus
        </button>
      </div>
    </aside>
  );
}