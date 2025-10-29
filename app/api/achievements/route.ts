import { NextResponse } from "next/server"

const achievements = [
  {
    id: 1,
    title: "Juara 2 Olimpiade Jaringan Mikrotik 2025",
    description: "Mendapatkan Juara 2 Olimpiade Jaringan Mikrotik 2025 tingkat Nasional",
    date: "20 October 2025",
    category: "Competition",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Juara 2 Cloud Computing Lomba Kompetensi Siswa Tingkat Nasional",
    description: "Juara 2 Cloud Computing Lomba Kompetensi Siswa tingkat Nasional",
    date: "July 2025",
    category: "Competition",
    icon: "📚",
  },
  {
    id: 3,
    title: "Juara 1 LKS Jatim ITNSA & Cloud Computing",
    description: "Juara 1 Lomba Kompetensi Siswa Tingkat Jatim bidang ITNSA & Cloud Computing",
    date: "April 2025",
    category: "Competition",
    icon: "💻",
  },
  {
    id: 4,
    title: "Juara 2 LKS Jatim ITNSA & Cloud Computing",
    description: "Juara 2 Lomba Kompetensi Siswa Tingkat Jatim bidang ITNSA & Cloud Computing",
    date: "April 2024",
    category: "Competition",
    icon: "🏆",
  },
]

export async function GET() {
  return NextResponse.json(achievements)
}
