import { type NextRequest, NextResponse } from "next/server"

// In-memory database (replace with real database in production)
const members: any[] = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi@techcommunity.id",
    role: "Frontend Developer",
    joinDate: "2024-01-15",
    status: "active",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    email: "siti@techcommunity.id",
    role: "Backend Developer",
    joinDate: "2024-02-20",
    status: "active",
  },
]

let nextId = 3

export async function GET() {
  return NextResponse.json(members)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newMember = {
      id: nextId++,
      ...body,
      joinDate: new Date().toISOString().split("T")[0],
      status: "active",
    }

    members.push(newMember)
    return NextResponse.json(newMember, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
