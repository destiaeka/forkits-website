import { NextResponse } from "next/server"

const activities = [
  {
    id: 1,
    title: "Bootcamp TKJ se-Blitar Raya",
    description: "Bootcamp MikroTik Se-Blitar Raya lengkap dengan sertifikasi MTCNA",
    date: "2024-11-15",
    time: "07:00 - 16:00",
    location: "SMKN 1 Nglegok",
    category: "Bootcamp",
    capacity: 50,
    registered: 50,
    image: "/bootcamp.jpg",
  },
  {
    id: 2,
    title: "IT Festival Network Competition",
    description: "Perlombaan IT antar kelas",
    date: "2024-01-22",
    time: "07:00 - 15:00",
    location: "Indoor SMKN 1 Nglegok",
    category: "Competition",
    capacity: 50,
    registered: 50,
    image: "/ivention.jpg",
  },
  {
    id: 3,
    title: "Bootcamp MTCTCE",
    description: "Bootcamp Networking MTCTCE",
    date: "2024-12-28",
    time: "08:00 - 16:00",
    location: "SMKN 1 Nglegok",
    category: "Bootcamp",
    capacity: 30,
    registered: 30,
    image: "/rand.JPG",
  },
]

export async function GET() {
  return NextResponse.json(activities)
}
