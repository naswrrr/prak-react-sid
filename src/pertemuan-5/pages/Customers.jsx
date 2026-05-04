import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    const customerData = [
        { id: "C-01", name: "Taylor Swift", email: "taylor@swift.com", phone: "123-456-7890", loyalty: "Gold" },
        { id: "C-02", name: "Ed Sheeran", email: "ed@sheeran.com", phone: "123-456-7891", loyalty: "Silver" },
        { id: "C-03", name: "Selena Gomez", email: "selena@gomez.com", phone: "123-456-7892", loyalty: "Bronze" },
        { id: "C-04", name: "Bruno Mars", email: "bruno@mars.com", phone: "123-456-7893", loyalty: "Gold" },
        { id: "C-05", name: "Ariana Grande", email: "ariana@grande.com", phone: "123-456-7894", loyalty: "Silver" },
        { id: "C-06", name: "Justin Bieber", email: "justin@bieber.com", phone: "123-456-7895", loyalty: "Bronze" },
        { id: "C-07", name: "Dua Lipa", email: "dua@lipa.com", phone: "123-456-7896", loyalty: "Gold" },
        { id: "C-08", name: "The Weeknd", email: "abel@tesfaye.com", phone: "123-456-7897", loyalty: "Silver" },
        { id: "C-09", name: "Billie Eilish", email: "billie@eilish.com", phone: "123-456-7898", loyalty: "Bronze" },
        { id: "C-10", name: "Post Malone", email: "posty@malone.com", phone: "123-456-7899", loyalty: "Gold" },
        { id: "C-11", name: "Olivia Rodrigo", email: "olivia@rodrigo.com", phone: "123-456-7900", loyalty: "Silver" },
        { id: "C-12", name: "Harry Styles", Harry: "harry@styles.com", phone: "123-456-7901", loyalty: "Bronze" },
        { id: "C-13", name: "Adele Adkins", email: "adele@adkins.com", phone: "123-456-7902", loyalty: "Gold" },
        { id: "C-14", name: "Shawn Mendes", email: "shawn@mendes.com", phone: "123-456-7903", loyalty: "Silver" },
        { id: "C-15", name: "Camila Cabello", email: "camila@cabello.com", phone: "123-456-7904", loyalty: "Bronze" },
        { id: "C-16", name: "Katy Perry", email: "katy@perry.com", phone: "123-456-7905", loyalty: "Gold" },
        { id: "C-17", name: "Lady Gaga", email: "lady@gaga.com", phone: "123-456-7906", loyalty: "Silver" },
        { id: "C-18", name: "Drake Graham", email: "drake@october.com", phone: "123-456-7907", loyalty: "Bronze" },
        { id: "C-19", name: "Rihanna Fenty", email: "rihanna@fenty.com", phone: "123-456-7908", loyalty: "Gold" },
        { id: "C-20", name: "Beyonce Knowles", email: "bey@knowles.com", phone: "123-456-7909", loyalty: "Silver" },
        { id: "C-21", name: "Chris Martin", email: "chris@coldplay.com", phone: "123-456-7910", loyalty: "Bronze" },
        { id: "C-22", name: "Charlie Puth", email: "charlie@puth.com", phone: "123-456-7911", loyalty: "Gold" },
        { id: "C-23", name: "Halsey Frangipane", email: "halsey@h.com", phone: "123-456-7912", loyalty: "Silver" },
        { id: "C-24", name: "Lana Del Rey", email: "lana@delrey.com", phone: "123-456-7913", loyalty: "Bronze" },
        { id: "C-25", name: "SZA Rowe", email: "sza@sza.com", phone: "123-456-7914", loyalty: "Gold" },
        { id: "C-26", name: "Doja Cat", email: "doja@cat.com", phone: "123-456-7915", loyalty: "Silver" },
        { id: "C-27", name: "Khalid Robinson", email: "khalid@rob.com", phone: "123-456-7916", loyalty: "Bronze" },
        { id: "C-28", name: "Zayn Malik", email: "zayn@malik.com", phone: "123-456-7917", loyalty: "Gold" },
        { id: "C-29", name: "Lizzo Jefferson", email: "lizzo@lizzo.com", phone: "123-456-7918", loyalty: "Silver" },
        { id: "C-30", name: "Niall Horan", email: "niall@horan.com", phone: "123-456-7919", loyalty: "Bronze" },
    ];

    return (
        <div className="space-y-6 p-4">
            <PageHeader title="Customer List" breadcrumb="Dashboard / Customers">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className={`flex items-center gap-2 px-6 py-2.5 text-white rounded-full text-sm font-bold transition-all shadow-lg ${showForm ? "bg-gray-600" : "bg-hijau hover:opacity-80"
                        }`}
                >
                    {showForm ? <FaTimes /> : <FaPlus />} {showForm ? "Cancel" : "Add Customer"}
                </button>
            </PageHeader>

            {showForm && (
                <div className="bg-white p-8 rounded-[35px] border border-green-100 shadow-sm mx-4">
                    <h3 className="text-xl font-black text-blue-900 mb-6">New Customer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Name" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400" />
                        <input type="email" placeholder="Email" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400" />
                        <input type="text" placeholder="Phone" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400" />
                        <select className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-green-400 font-bold text-blue-900">
                            <option>Bronze</option>
                            <option>Silver</option>
                            <option>Gold</option>
                        </select>
                        <button className="md:col-span-2 bg-hijau text-white font-black py-4 rounded-2xl">SUBMIT</button>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-blue-50 mx-4 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-blue-300 uppercase text-[11px] font-black border-b border-blue-50">
                                <th className="pb-4">ID</th>
                                <th className="pb-4">Name</th>
                                <th className="pb-4">Email</th>
                                <th className="pb-4">Phone</th>
                                <th className="pb-4">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerData.map((item) => (
                                <tr key={item.id} className="text-blue-900 font-bold text-sm border-b border-blue-50/50 hover:bg-green-50 transition-all">
                                    <td className="py-4">{item.id}</td>
                                    <td className="py-4">{item.name}</td>
                                    <td className="py-4 text-blue-400">{item.email}</td>
                                    <td className="py-4">{item.phone}</td>
                                    <td className="py-4">
                                        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${item.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-600' :
                                                item.loyalty === 'Silver' ? 'bg-slate-100 text-slate-600' : 'bg-orange-100 text-orange-600'
                                            }`}>{item.loyalty}</span>
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