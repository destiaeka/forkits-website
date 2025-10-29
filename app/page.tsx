"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Users, Trophy, Calendar, ImageIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-primary/5 to-accent/5 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Komunitas IT SMKN 1 Nglegok
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Pelajari teknologi terbaru, berbagi pengetahuan, dan berkembang bersama ribuan developer profesional di
                Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Daftar Sekarang <ArrowRight size={20} />
                </Link>
                <Link
                  href="#about"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
           <div className="hidden md:block">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
              <div className="bg-white/20 rounded-lg overflow-hidden">
                <img
                  src="/forkits.JPG"
                  alt="Foto"
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Komunitas IT SMKN 1 Nglegok</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">200+ Anggota</h3>
              <p className="text-muted-foreground">
                Bergabunglah dan pelajar Teknologi terbaru dengan para ahli.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">50+ Prestasi</h3>
              <p className="text-muted-foreground">
                Raih penghargaan dan sertifikasi melalui berbagai kompetisi dan workshop.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">100+ Event</h3>
              <p className="text-muted-foreground">Ikuti workshop, meetup, bootcamp, dan webinar setiap bulannya.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/achievements"
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Trophy className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Prestasi</h3>
                  <p className="text-muted-foreground mb-4">Lihat pencapaian luar biasa dari anggota komunitas kami.</p>
                  <span className="text-primary font-semibold flex items-center gap-2">
                    Lihat Selengkapnya <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/activities"
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Kegiatan</h3>
                  <p className="text-muted-foreground mb-4">Ikuti berbagai event menarik dan tingkatkan skill Anda.</p>
                  <span className="text-primary font-semibold flex items-center gap-2">
                    Lihat Selengkapnya <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/gallery"
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ImageIcon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Galeri</h3>
                  <p className="text-muted-foreground mb-4">
                    Jelajahi momen-momen berharga dari setiap event komunitas.
                  </p>
                  <span className="text-primary font-semibold flex items-center gap-2">
                    Lihat Selengkapnya <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/contact"
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Bergabung</h3>
                  <p className="text-muted-foreground mb-4">
                    Daftar sebagai anggota dan mulai perjalanan Anda bersama kami.
                  </p>
                  <span className="text-primary font-semibold flex items-center gap-2">
                    Daftar Sekarang <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
