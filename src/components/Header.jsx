import React, { useState } from "react";
import { FaBell, FaSearch, FaCog, FaUser, FaSignOutAlt, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // IMPROVISASI: State untuk Modal Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
        {/* Search Bar - Sekarang kalau diklik akan buka modal */}
        <div 
          onClick={() => setIsSearchOpen(true)} 
          className="relative w-full max-w-md cursor-pointer group"
        >
          <div className="w-full p-2 bg-blue-50/50 border border-blue-100 rounded-lg text-blue-300 flex justify-between items-center px-4 text-sm group-hover:border-blue-300 transition-all">
            <span>Search Here...</span>
            <FaSearch />
          </div>
        </div>

        {/* Bagian Kanan Header: Notifikasi, Pengaturan, & Profil */}
        <div className="flex items-center space-x-4">
          {/* Tombol Notifikasi */}
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl relative cursor-pointer">
            <FaBell /> 
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] px-1.5 rounded-full border-2 border-white">21</span>
          </div>

          {/* Tombol Settings */}
          <div className="p-3 bg-red-100 text-red-500 rounded-xl cursor-pointer">
            <FaCog />
          </div>
          
          {/* Profil Dropdown */}
          <div className="relative border-l pl-4 border-blue-100">
            <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-3 cursor-pointer">
              <div className="text-right">
                <p className="text-sm font-bold text-blue-900">Samantha</p>
                <p className="text-[10px] text-blue-400 font-bold">Admin Comel</p>
              </div>
              <img src="img/neponcing.jpeg" className="w-10 h-10 rounded-2xl border-2 border-blue-200" alt="profile" />
            </div>

            {/* Konten Dropdown Profile */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-white rounded-2xl shadow-xl border border-blue-50 z-50 overflow-hidden">
                <div className="p-4 hover:bg-blue-50 cursor-pointer flex items-center gap-3 text-sm font-bold text-slate-600">
                  <FaUser className="text-blue-400" /> Profile
                </div>
                <div className="p-4 hover:bg-red-50 cursor-pointer flex items-center gap-3 text-sm font-bold text-red-500 border-t border-blue-50">
                  <FaSignOutAlt /> Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* --- IMPROVISASI: MODAL QUICK FIND --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-[99] flex justify-center items-start pt-24 transition-all">
          {/* Overlay untuk nutup modal kalau klik di luar kotak */}
          <div className="absolute inset-0" onClick={() => setIsSearchOpen(false)}></div>
          
          {/* Kotak Modal */}
          <div className="bg-white w-full max-w-2xl p-8 rounded-[40px] shadow-2xl border-4 border-blue-100 relative z-10 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-blue-600 flex items-center gap-2">
                <FaSearch className="text-sm" /> Quick Find
              </h2>
              <button 
                onClick={() => setIsSearchOpen(false)} 
                className="bg-blue-50 p-2 rounded-full text-blue-400 hover:bg-red-100 hover:text-red-500 transition-all"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="relative">
              <input 
                autoFocus 
                type="text" 
                placeholder="What are you looking for?" 
                className="w-full text-2xl py-4 border-b-4 border-blue-50 outline-none text-blue-900 placeholder-blue-100 bg-transparent focus:border-blue-400 transition-all"
              />
              <p className="mt-4 text-xs text-blue-300 font-bold uppercase tracking-widest">Suggestions: Orders, Customers, Revenue Reports</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}