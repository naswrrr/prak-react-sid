import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import productsData from "../data/products.json"; 
import { Link } from "react-router-dom";

export default function Products() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="space-y-6 p-4">
            {/* 1. Header dengan Tombol Add Product */}
            <PageHeader title="Product Inventory" breadcrumb="Dashboard / Products">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className={`flex items-center gap-2 px-6 py-2.5 text-white rounded-full text-sm font-bold transition-all shadow-lg ${
                        showForm ? "bg-gray-600" : "bg-hijau hover:opacity-80"
                    }`}
                >
                    {showForm ? <FaTimes /> : <FaPlus />} {showForm ? "Cancel" : "Add Product"}
                </button>
            </PageHeader>

            {/* 2. Form Input Produk Baru (Style sama dengan Customer) */}
            {showForm && (
                <div className="bg-white p-8 rounded-[35px] border border-green-100 shadow-sm mx-4">
                    <h3 className="text-xl font-black text-blue-900 mb-6">New Product Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Product Title" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400" />
                        <input type="text" placeholder="Product Code (e.g. ACC-01)" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400" />
                        <input type="text" placeholder="Brand" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400" />
                        <input type="number" placeholder="Price" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400" />
                        <select className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400 font-bold text-blue-900">
                            <option>Accessories</option>
                            <option>Electronics</option>
                            <option>Audio</option>
                            <option>Furniture</option>
                        </select>
                        <input type="number" placeholder="Initial Stock" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400" />
                        <button className="md:col-span-2 bg-hijau text-white font-black py-4 rounded-2xl hover:bg-opacity-90 transition-all">
                            SAVE TO INVENTORY
                        </button>
                    </div>
                </div>
            )}

            {/* 3. Tabel Produk Modern */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-blue-50 mx-4 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-blue-300 uppercase text-[11px] font-black border-b border-blue-50">
                                <th className="pb-4">ID</th>
                                <th className="pb-4">Product Name</th>
                                <th className="pb-4">Code</th>
                                <th className="pb-4">Category</th>
                                <th className="pb-4">Price</th>
                                <th className="pb-4">Stock Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsData.map((item) => (
                                <tr key={item.id} className="text-blue-900 font-bold text-sm border-b border-blue-50/50 hover:bg-green-50 transition-all">
                                    <td className="py-5 text-blue-200">#{item.id}</td>
                                    <td className="py-5">
                                        <div className="flex flex-col">
                                            <Link 
                                                to={`/products/${item.id}`} 
                                                className="text-hijau hover:text-green-600 transition-colors no-underline">
                                                {item.tittle}
                                            </Link>
                                            <span className="text-[10px] text-blue-400 font-medium uppercase tracking-tight">{item.brand}</span>
                                        </div>
                                    </td>
                                    <td className="py-5">
                                        <span className="bg-blue-50 text-blue-500 px-3 py-1 rounded-lg text-[10px] font-black border border-blue-100">
                                            {item.code}
                                        </span>
                                    </td>
                                    <td className="py-5 text-blue-400 font-medium">{item.category}</td>
                                    <td className="py-5 text-hijau font-black">
                                        Rp {item.price.toLocaleString('id-ID')}
                                    </td>
                                    <td className="py-5">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${
                                            item.stock > 20 ? 'bg-green-100 text-green-600' : 
                                            item.stock > 10 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                                        }`}>
                                            {item.stock} Available
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}