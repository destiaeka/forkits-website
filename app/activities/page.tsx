"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

interface Activity {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  capacity: number
  registered: number
  image: string
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/activities")
        const data = await res.json()
        setActivities(data)
      } catch (error) {
        console.error("Failed to fetch activities:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Calendar size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">Kegiatan Komunitas</h1>
          </div>
          <p className="text-lg opacity-90">Ikuti berbagai event menarik dan tingkatkan skill Anda bersama kami</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Memuat kegiatan...</p>
            </div>
          ) : (
            <div className="space-y-8">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="md:col-span-1 h-64 md:h-auto relative bg-muted">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {activity.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{activity.title}</h3>
                        <p className="text-muted-foreground mb-6">{activity.description}</p>

                        {/* Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-foreground">
                            <Calendar size={20} className="text-primary" />
                            <div>
                              <p className="font-medium">{new Date(activity.date).toLocaleDateString("id-ID")}</p>
                              <p className="text-sm text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-foreground">
                            <MapPin size={20} className="text-primary" />
                            <p className="font-medium">{activity.location}</p>
                          </div>
                          <div className="flex items-center gap-3 text-foreground">
                            <Users size={20} className="text-primary" />
                            <p className="font-medium">
                              {activity.registered} / {activity.capacity} Peserta Terdaftar
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${(activity.registered / activity.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {Math.round((activity.registered / activity.capacity) * 100)}% Kapasitas Terisi
                        </p>
                      </div>

                      {/* CTA */}
                      <button className="w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center gap-2">
                        Daftar Sekarang <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
