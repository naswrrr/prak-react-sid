import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa"; // 1. Tambahkan FaTimes di sini
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import PageHeader from "../components/PageHeader";

export default function Components() {
    const [showForm, setShowForm] = useState(false);
    
    const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];
    const products = [
        { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000" },
        { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
        { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000" }
    ];

    return (
        // 2. Gunakan space-y-6 dan p-4 agar sejajar dengan halaman lain
        <div className="space-y-6 p-4">
            <PageHeader title="Components Library" breadcrumb="Dashboard / Components">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className={`flex items-center gap-2 px-6 py-2.5 text-white rounded-full text-sm font-bold transition-all shadow-lg ${
                        showForm ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700 shadow-blue-100"
                    }`}
                >
                    {showForm ? <FaTimes /> : <FaPlus />} {showForm ? "Cancel" : "Add Component"}
                </button>
            </PageHeader>

            <div className="flex gap-2 mt-4">
                <Button type="primary">Edit</Button>
                <Button type="success">Simpan</Button>
                <Button type="danger">Hapus</Button>
            </div>

            <div className="flex gap-2 mt-4">
                <Avatar name="Budi" />
                <Avatar name="Siti" />
            </div>

            <Container className="bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">
                    Daftar Produk
                </h1>

                <p className="text-gray-600">
                    Berikut adalah daftar produk terbaru.
                </p>
            </Container>

            <Card>
                <h2 className="text-xl font-bold">Judul Card</h2>
                <p className="text-gray-600">Ini adalah isi dari card.</p>
            </Card>

            <div className="space-y-8">
                <ProductCard
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                    title="Sepatu Sport"
                    category="Fashion"
                    price="Rp 450.000"
                    description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
                />

                <ProductCard
                    image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                    title="Smartphone"
                    category="Elektronik"
                    price="Rp 4.500.000"
                    description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
                />
            </div>

            <Table headers={headers}>
                {products.map((product, index) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                        <td className="border px-4 py-3">
                            {index + 1}
                        </td>

                        <td className="border px-4 py-3">
                            {product.name}
                        </td>

                        <td className="border px-4 py-3">
                            {product.category}
                        </td>

                        <td className="border px-4 py-3">
                            {product.price}
                        </td>

                        <td className="border px-4 py-3">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded">
                                Detail
                            </button>
                        </td>
                    </tr>
                ))}
            </Table>

            <Footer />
        </div>
    );
}