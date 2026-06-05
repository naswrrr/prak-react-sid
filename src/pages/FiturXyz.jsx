import { Button } from "@/components/ui/button";
import PageHeader from "../components/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FiturXyz() {
  return (
    // 1. Wrapper Utama: Diberi padding dan jarak antar baris yang konsisten
    <div className="p-6 space-y-8">
      
      {/* Header Halaman */}
      <div>
        <PageHeader title="Fitur XYZ" />
        <p className="text-sm text-slate-500 mt-1 pl-1">Ini Halaman Fitur XYZ</p>
      </div>

      {/* Grid Konten: Mengatur susunan komponen agar tidak menumpuk kaku */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* SISI KIRI: Kumpulan Button Tes */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Komponen Button</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="outline">Tes</Button>
            <Button variant="default" size="sm">Tes</Button>
            <Button variant="destructive" size="sm">Tes</Button>
            <Button variant="ghost" size="sm">Tes</Button>
          </div>
        </div>

        {/* SISI KANAN: Card Login (Sudah Diperbaiki komponen & layoutnya) */}
        <Card className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <CardHeader className="relative">
            {/* Posisikan tombol Sign Up dengan rapi di pojok kanan atas */}
            <div className="absolute top-6 right-6">
              <Button variant="link" className="p-0 h-auto text-sm text-blue-600 hover:text-blue-700">
                Sign Up
              </Button>
            </div>
            <CardTitle className="text-xl font-bold text-slate-900">Login to your account</CardTitle>
            <CardDescription className="text-slate-500 text-sm mt-1">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-5">
                {/* Field Email */}
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="rounded-xl"
                  />
                </div>
                
                {/* Field Password */}
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-semibold text-slate-700">Password</Label>
                    <a
                      href="#"
                      className="text-xs text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required className="rounded-xl" />
                </div>
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-3 pt-2">
            <Button type="submit" className="w-full rounded-xl">
              Login
            </Button>
            <Button variant="outline" className="w-full rounded-xl">
              Login with Google
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}