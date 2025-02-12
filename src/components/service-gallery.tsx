"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

const GALLERY_IMAGES = [
  "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
  "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
  "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
]

export function ServiceGallery() {
  const [selectedImage, setSelectedImage] = useState(GALLERY_IMAGES[0])

  return (
    <div className="space-y-4">
      <Card className="relative aspect-video overflow-hidden bg-black/20 border-white/10">
        <Image src={selectedImage || "/placeholder.svg"} alt="Service preview" fill className="object-cover" />
      </Card>
      <div className="grid grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((image, index) => (
          <Card
            key={index}
            className={`relative aspect-video cursor-pointer overflow-hidden bg-black/20 border-white/10 
              ${selectedImage === image ? "ring-2 ring-purple-500" : ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image || "/placeholder.svg"} alt={`Preview ${index + 1}`} fill className="object-cover" />
          </Card>
        ))}
      </div>
    </div>
  )
}

