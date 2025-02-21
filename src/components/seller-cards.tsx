import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const SELLERS = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "I will create a custom AI solution for your business",
    rating: 4.9,
    reviews: 182,
    price: 150,
    image:
      "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    title: "I will design a modern website using Next.js and Tailwind",
    rating: 5.0,
    reviews: 143,
    price: 200,
    image:
      "https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg",
  },
  // Add more sellers as needed
]

export function SellerCards() {
  return (
    <section className="py-16 ml-8">
      <div className="container">
        <h2 className="text-2xl  text-center font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Sellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SELLERS.map((seller) => (
            <Card key={seller.id} className="bg-black/20 border-white/10 hover:border-white/20 transition-all">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image src={seller.image || "/placeholder.svg"} alt={seller.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={`https://avatar.vercel.sh/${seller.name}`} />
                      <AvatarFallback>{seller.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-white">{seller.name}</span>
                  </div>
                  <h3 className="font-medium text-white mb-2">{seller.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{seller.rating}</span>
                    <span className="text-sm text-gray-400">({seller.reviews})</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 p-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-gray-400">Starting at</span>
                  <span className="font-medium text-white">${seller.price}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

