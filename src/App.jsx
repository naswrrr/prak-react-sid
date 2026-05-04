import { Routes, Route } from "react-router-dom"; 
import Sidebar from "./pertemuan-5/layouts/Sidebar";
import Header from "./pertemuan-5/layouts/Header";
// 1. Ubah import NotFound menjadi ErrorPage (karena sekarang satu komponen untuk semua)
import ErrorPage from "./pertemuan-5/pages/ErrorPage";

// Import halaman-halamannya
import Dashboard from "./pertemuan-5/pages/Dashboard";
import Orders from "./pertemuan-5/pages/Orders";
import Customers from "./pertemuan-5/pages/Customers";

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        
        <div className="flex-1 p-4">
          <Header />
          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            
            {/* --- TAMBAHKAN ROUTE ERROR DI SINI --- */}
            <Route 
              path="/error-400" 
              element={<ErrorPage code="400" description="Bad Request. Permintaan tidak dipahami." image="🚫" />} 
            />
            <Route 
              path="/error-401" 
              element={<ErrorPage code="401" description="Unauthorized. Kamu harus login dulu." image="🔒" />} 
            />
            <Route 
              path="/error-403" 
              element={<ErrorPage code="403" description="Forbidden. Kamu tidak punya akses ke sini." image="⛔" />} 
            />
            
            {/* Rute Sapu Jagat untuk 404 */}
            <Route 
              path="*" 
              element={<ErrorPage code="404" description="Halaman tidak ditemukan." image="🔍" />} 
            />
            {/* -------------------------------------- */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;