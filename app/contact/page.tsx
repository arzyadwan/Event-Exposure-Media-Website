"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulasi API Call (Delay 2 detik)
    // Di produksi, Anda bisa ganti ini dengan fetch ke API Email (e.g., Resend / Nodemailer)
    setTimeout(() => {
      setFormStatus("success");
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* KOLOM KIRI: INFO & PERSUASI */}
        <div className="space-y-10">
          <div>
            <p className="text-yellow-500 font-bold uppercase tracking-widest mb-4">
              Contact Us
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-none mb-6">
              Ready to <br /> Make Noise?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Isi formulir di samping untuk memulai diskusi. Kami sangat
              selektif dalam memilih proyek untuk memastikan fokus penuh pada
              kualitas eksekusi.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-yellow-500 pl-6">
              <h3 className="font-bold text-xl text-white">Office</h3>
              <p className="text-gray-400 mt-2">
                SCBD, Treasury Tower Level 20
                <br />
                Jakarta Selatan, 12190
              </p>
            </div>
            <div className="border-l-2 border-gray-800 pl-6 hover:border-yellow-500 transition-colors">
              <h3 className="font-bold text-xl text-white">Email</h3>
              <p className="text-gray-400 mt-2">hello@vanguard-eo.com</p>
            </div>
            <div className="border-l-2 border-gray-800 pl-6 hover:border-yellow-500 transition-colors">
              <h3 className="font-bold text-xl text-white">
                WhatsApp (Urgent)
              </h3>
              <p className="text-gray-400 mt-2">+62 812 3456 7890</p>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: FORM GATEKEEPER */}
        <div className="bg-neutral-900/50 p-8 md:p-12 rounded-2xl border border-white/10">
          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Message Sent.
              </h3>
              <p className="text-gray-400">
                Tim strategi kami akan menghubungi Anda dalam 1x24 jam.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="mt-8 text-yellow-500 font-bold hover:underline"
              >
                Kirim pesan lain
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Nama & Perusahaan */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border-b border-gray-700 p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border-b border-gray-700 p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="PT Maju Mundur"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black border-b border-gray-700 p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-black border-b border-gray-700 p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="+62..."
                  />
                </div>
              </div>

              {/* THE FILTER: BUDGET DROP DOWN */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-yellow-500">
                  Estimated Budget
                </label>
                <select
                  className="w-full bg-black border-b border-gray-700 p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors appearance-none"
                  required
                  defaultValue="" // PERBAIKAN: Set default value di sini
                >
                  <option value="" disabled>
                    Pilih Range Budget Anda
                  </option>{" "}
                  {/* Hapus 'selected' dari sini */}
                  <option value="low">IDR 100 Juta - 300 Juta</option>
                  <option value="medium">IDR 300 Juta - 1 Miliar</option>
                  <option value="high">Above IDR 1 Miliar</option>
                  <option value="undisclosed">
                    Undisclosed (NDA Required)
                  </option>
                </select>
                <p className="text-xs text-gray-600 mt-1">
                  *Kami memprioritaskan proyek dengan kejelasan alokasi dana.
                </p>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-black border-b border-gray-700 p-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Ceritakan sedikit tentang event yang Anda rencanakan..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
