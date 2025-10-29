"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { ImageIcon, Calendar, Tag } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  description: string
  image: string
  date: string
  category: string
}

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/gallery")
        const data = await res.json()
        setGallery(data)
      } catch (error) {
        console.error("Failed to fetch gallery:", error)
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
            <ImageIcon size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">Galeri Komunitas</h1>
          </div>
          <p className="text-lg opacity-90">Jelajahi momen-momen berharga dari setiap event komunitas kami</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Memuat galeri...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <ImageIcon
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        size={40}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(item.date).toLocaleDateString("id-ID")}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 bg-secondary rounded">
                        <Tag size={14} />
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">{selectedImage.title}</h2>
              <p className="text-muted-foreground mb-6">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="text-primary" size={20} />
                  <span>{new Date(selectedImage.date).toLocaleDateString("id-ID")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="text-primary" size={20} />
                  <span>{selectedImage.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
