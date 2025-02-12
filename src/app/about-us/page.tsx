import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        About SUILANCE
      </h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-300 mb-6">
            SUILANCE is revolutionizing the freelancing industry by leveraging blockchain technology and zkLogin to
            provide a secure, private, and decentralized platform for freelancers and clients worldwide.
          </p>
          <p className="text-gray-300 mb-6">
            Our mission is to empower freelancers with cutting-edge tools while ensuring clients receive top-quality
            services, all within a transparent and efficient ecosystem.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Why Choose SUILANCE?
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Secure transactions powered by Sui blockchain</li>
            <li>Privacy-preserving identity verification with zkLogin</li>
            <li>Decentralized dispute resolution</li>
            <li>Global talent pool with verified skills</li>
            <li>Innovative AI-powered matching algorithm</li>
          </ul>
        </div>
        <div>
          <Card className="bg-black/20 border-white/10">
            <CardContent className="p-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=300&width=400" alt="SUILANCE Team" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Our Vision
              </h3>
              <p className="text-gray-300">
                At SUILANCE, we envision a future where freelancers and clients collaborate seamlessly in a
                decentralized ecosystem, free from intermediaries and powered by cutting-edge blockchain technology.
                We're committed to building a platform that fosters trust, innovation, and fair compensation for all.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

