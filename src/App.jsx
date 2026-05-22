import { Routes, Route } from "react-router-dom";
// 1. Ubah import NotFound menjadi ErrorPage (karena sekarang satu komponen untuk semua)
import ErrorPage from "./pertemuan-5/pages/ErrorPage";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
import Products from "./pages/Products";

// Import halaman-halamannya
// import Dashboard from "./pertemuan-5/pages/Dashboard";
// import Orders from "./pertemuan-5/pages/Orders";
// import Customers from "./pertemuan-5/pages/Customers";
// import MainLayout from "./layouts/MainLayout";
// import Login from "./pages/auth/login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import AuthLayout from "./layouts/AuthLayout";

const Dashboard = React.lazy(() => import("./pertemuan-5/pages/Dashboard"))
const Orders = React.lazy(() => import("./pertemuan-5/pages/Orders"))
const Customers = React.lazy(() => import("./pertemuan-5/pages/Customers"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const Login = React.lazy(() => import("./pages/auth/login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 

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
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;