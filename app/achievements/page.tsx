"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { Trophy, Calendar, Tag } from "lucide-react"

interface Achievement {
  id: number
  title: string
  description: string
  date: string
  category: string
  icon: string
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/achievements")
        const data = await res.json()
        setAchievements(data)
      } catch (error) {
        console.error("Failed to fetch achievements:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const categories = ["All", ...new Set(achievements.map((a) => a.category))]
  const filteredAchievements =
    selectedCategory === "All" ? achievements : achievements.filter((a) => a.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Trophy size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">Prestasi Komunitas</h1>
          </div>
          <p className="text-lg opacity-90">Pencapaian luar biasa dari anggota Komunitas IT SMKN 1 Nglegok</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold mb-4">Filter Kategori</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Memuat prestasi...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Tag size={16} />
                        <span>{achievement.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{achievement.description}</p>

                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Calendar size={16} />
                    <span>{new Date(achievement.date).toLocaleDateString("id-ID")}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Tidak ada prestasi dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
