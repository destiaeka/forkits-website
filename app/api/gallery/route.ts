import { NextResponse } from "next/server"

const gallery = [
  {
    id: 1,
    title: "Outbound",
    description: "Outbound seru untuk memperkuat solidaritas",
    image: "/forkits.JPG",
    date: "2024-06-15",
    category: "Outbound",
  },
  {
    id: 2,
    title: "Buka Puasa Bersama",
    description: "Buka Puasa Bersama seluruh anggota & alumni KITS",
    image: "/rand.JPG",
    date: "2024-05-20",
    category: "Bukber",
  },
  {
    id: 3,
    title: "Bootcamp",
    description: "Bootcamp & Riview materi yang sudah dipelajari selama 1 semester",
    image: "/bootcamp.jpg",
    date: "2024-04-10",
    category: "Bootcamp",
  },
  {
    id: 4,
    title: "Ivention",
    description: "Lomba antar siswa TKJ sebagai salah satu uji kompetensi",
    image: "/ivention.jpg",
    date: "2024-03-05",
    category: "Ivention",
  },
  {
    id: 5,
    title: "Bakti Sosial",
    description: "Kegiatan Bakti Sosial untuk meningkatan rasa kepedulian anggota",
    image: "/forkits.JPG",
    date: "2024-02-28",
    category: "Bakti Sosial",
  },
  {
    id: 6,
    title: "Ujian Kenaikan Tingkat",
    description: "Uji Kenaikan Tingkat Anggota untuk persyaratan naik tingkat",
    image: "/ukt.jpg",
    date: "2024-02-15",
    category: "Ujian Kenaikan Tingkat",
  },
]

export async function GET() {
  return NextResponse.json(gallery)
}
