const API_BASE = "/api"

export async function fetchMembers() {
  const res = await fetch(`${API_BASE}/members`)
  if (!res.ok) throw new Error("Failed to fetch members")
  return res.json()
}

export async function createMember(data: any) {
  const res = await fetch(`${API_BASE}/members`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Failed to create member")
  return res.json()
}

export async function fetchAchievements() {
  const res = await fetch(`${API_BASE}/achievements`)
  if (!res.ok) throw new Error("Failed to fetch achievements")
  return res.json()
}

export async function fetchActivities() {
  const res = await fetch(`${API_BASE}/activities`)
  if (!res.ok) throw new Error("Failed to fetch activities")
  return res.json()
}

export async function fetchGallery() {
  const res = await fetch(`${API_BASE}/gallery`)
  if (!res.ok) throw new Error("Failed to fetch gallery")
  return res.json()
}
