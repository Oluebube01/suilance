import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const POPULAR_SERVICES = [
  {
    title: "AI Services",
    image:
      "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Development",
    image:
      "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Marketing",
    image:
      "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Design & Creative",
    image:
      "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
    color: "from-orange-500 to-red-500",
  },
]

export function PopularServices() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Popular Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_SERVICES.map((service) => (
            <Card
              key={service.title}
              className="group cursor-pointer overflow-hidden bg-black/20 border-white/10 hover:border-white/20 transition-all"
            >
              <CardContent className="p-0">
                <div className="relative h-40">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  ></div>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{service.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

