import { Routes, Route } from "react-router-dom"; 
import Sidebar from "./pertemuan-5/layouts/Sidebar";
import Header from "./pertemuan-5/layouts/Header";
import NotFound from "./pertemuan-5/pages/NotFound"; // Pastikan import ini ada

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;