import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">for.kits</h3>
            <p className="text-sm opacity-90">
              Komunitas IT terbesar di Indonesia yang fokus pada pembelajaran, berbagi pengetahuan, dan pengembangan
              karir.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:opacity-80 transition-opacity">
                  Prestasi
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:opacity-80 transition-opacity">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:opacity-80 transition-opacity">
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@techcommunity.id" className="hover:opacity-80 transition-opacity">
                  for.kits@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+62812345678" className="hover:opacity-80 transition-opacity">
                  +62 812 345 678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Blitar, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                Instagram
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Tiktok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Tech Community. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
