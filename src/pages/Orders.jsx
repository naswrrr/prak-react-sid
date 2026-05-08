import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    const [showForm, setShowForm] = useState(false);

    // DATA ORDERS (30 DATA - FORMAT ARRAY OF OBJECTS)
    const orderData = [
        { id: "ORD-01", name: "Taylor Swift", status: "Completed", price: "150.00", date: "2026-05-04" },
        { id: "ORD-02", name: "Ed Sheeran", status: "Pending", price: "85.50", date: "2026-05-04" },
        { id: "ORD-03", name: "Selena Gomez", status: "Cancelled", price: "45.00", date: "2026-05-04" },
        { id: "ORD-04", name: "Bruno Mars", status: "Completed", price: "200.00", date: "2026-05-04" },
        { id: "ORD-05", name: "Ariana Grande", status: "Pending", price: "120.00", date: "2026-05-04" },
        { id: "ORD-06", name: "Justin Bieber", status: "Completed", price: "99.00", date: "2026-05-04" },
        { id: "ORD-07", name: "Dua Lipa", status: "Cancelled", price: "30.50", date: "2026-05-04" },
        { id: "ORD-08", name: "The Weeknd", status: "Completed", price: "350.00", date: "2026-05-04" },
        { id: "ORD-09", name: "Billie Eilish", status: "Pending", price: "55.00", date: "2026-05-04" },
        { id: "ORD-10", name: "Post Malone", status: "Completed", price: "145.20", date: "2026-05-04" },
        { id: "ORD-11", name: "Olivia Rodrigo", status: "Pending", price: "78.00", date: "2026-05-04" },
        { id: "ORD-12", name: "Harry Styles", status: "Completed", price: "112.00", date: "2026-05-04" },
        { id: "ORD-13", name: "Adele Adkins", status: "Cancelled", price: "95.00", date: "2026-05-04" },
        { id: "ORD-14", name: "Shawn Mendes", status: "Completed", price: "60.00", date: "2026-05-04" },
        { id: "ORD-15", name: "Camila Cabello", status: "Pending", price: "45.90", date: "2026-05-04" },
        { id: "ORD-16", name: "Katy Perry", status: "Completed", price: "130.00", date: "2026-05-04" },
        { id: "ORD-17", name: "Lady Gaga", status: "Pending", price: "210.00", date: "2026-05-04" },
        { id: "ORD-18", name: "Drake Graham", status: "Cancelled", price: "500.00", date: "2026-05-04" },
        { id: "ORD-19", name: "Rihanna Fenty", status: "Completed", price: "420.00", date: "2026-05-04" },
        { id: "ORD-20", name: "Beyonce Knowles", status: "Pending", price: "380.00", date: "2026-05-04" },
        { id: "ORD-21", name: "Chris Martin", status: "Completed", price: "155.00", date: "2026-05-04" },
        { id: "ORD-22", name: "Charlie Puth", status: "Cancelled", price: "25.00", date: "2026-05-04" },
        { id: "ORD-23", name: "Halsey Frangipane", status: "Completed", price: "88.00", date: "2026-05-04" },
        { id: "ORD-24", name: "Lana Del Rey", status: "Pending", price: "115.00", date: "2026-05-04" },
        { id: "ORD-25", name: "SZA Rowe", status: "Completed", price: "95.00", date: "2026-05-04" },
        { id: "ORD-26", name: "Doja Cat", status: "Cancelled", price: "40.00", date: "2026-05-04" },
        { id: "ORD-27", name: "Khalid Robinson", status: "Pending", price: "65.00", date: "2026-05-04" },
        { id: "ORD-28", name: "Zayn Malik", status: "Completed", price: "125.00", date: "2026-05-04" },
        { id: "ORD-29", name: "Lizzo Jefferson", status: "Pending", price: "90.00", date: "2026-05-04" },
        { id: "ORD-30", name: "Niall Horan", status: "Completed", price: "75.00", date: "2026-05-04" },
    ];

    return (
        <div className="space-y-6 p-4">
            {/* Header dengan Props title, breadcrumb, dan button sebagai children */}
            <PageHeader title="Order List" breadcrumb="Dashboard / Orders">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className={`flex items-center gap-2 px-6 py-2.5 text-white rounded-full text-sm font-bold transition-all shadow-lg ${showForm ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700 shadow-blue-100"
                        }`}
                >
                    {showForm ? <FaTimes /> : <FaPlus />} {showForm ? "Cancel" : "Add Order"}
                </button>
            </PageHeader>

            {/* Tampilan Form Input jika showForm bernilai true */}
            {showForm && (
                <div className="bg-white p-8 rounded-[35px] border border-blue-100 shadow-sm mx-4">
                    <h3 className="text-xl font-black text-blue-900 mb-6">Create New Order</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-blue-300 ml-2">Customer Name</label>
                            <input type="text" placeholder="e.g. Taylor Swift" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-blue-300 ml-2">Total Price ($)</label>
                            <input type="number" placeholder="0.00" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-blue-300 ml-2">Status</label>
                            <select className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 font-bold text-blue-900">
                                <option>Pending</option>
                                <option>Completed</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">
                                SAVE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabel Utama */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-blue-50 mx-4 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-blue-300 uppercase text-[11px] font-black border-b border-blue-50">
                                <th className="pb-4 px-2">Order ID</th>
                                <th className="pb-4 px-2">Customer</th>
                                <th className="pb-4 px-2">Status</th>
                                <th className="pb-4 px-2">Total Price</th>
                                <th className="pb-4 px-2">Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((item) => (
                                <tr key={item.id} className="text-blue-900 font-bold text-sm border-b border-blue-50/50 hover:bg-blue-50/50 transition-all group">
                                    <td className="py-4 px-2">{item.id}</td>
                                    <td className="py-4 px-2">{item.name}</td>
                                    <td className="py-4 px-2">
                                        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${item.status === 'Completed' ? 'bg-green-100 text-green-600' :
                                                item.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                                            }`}>{item.status}</span>
                                    </td>
                                    <td className="py-4 px-2 text-blue-600">${item.price}</td>
                                    <td className="py-4 px-2 text-blue-300 font-medium">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}