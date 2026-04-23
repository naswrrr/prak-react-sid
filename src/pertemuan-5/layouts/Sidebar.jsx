import { FaHome, FaClipboardList, FaUserFriends, FaPlus } from "react-icons/fa";

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", icon: <FaHome />, active: true },
    { name: "Orders", icon: <FaClipboardList /> },
    { name: "Customers", icon: <FaUserFriends /> },
  ];

  return (
    <aside className="w-64 bg-white border-r border-blue-100 p-4 flex flex-col justify-between min-h-screen">
      <div>
        <div className="mb-10 p-6">
          <h1 className="text-4xl font-black text-blue-900">Sedap<span className="text-hijau">.</span></h1>
          <p className="text-blue-300 text-[10px] font-medium mt-1">Modern Admin Dashboard</p>
        </div>
        <ul className="space-y-4 px-2 font-bold">
          {menus.map((m) => (
            <li key={m.name} className={`flex items-center space-x-4 p-3 rounded-2xl cursor-pointer ${m.active ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-blue-50/50'}`}>
              <span className="text-xl">{m.icon}</span>
              <span>{m.name}</span>
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