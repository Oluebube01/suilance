import Image from "next/image"

export default function AboutPage() {
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
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://sjc.microlink.io/3pT9QkUbnhyeyPoTPQyn0KXXgBJY5wyhe3YKtlGr9232tASA1Vhl9XftqEaqJxFvkxRAd-WjTff0J-QjxCn4EA.jpeg"
            alt="SUILANCE Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="font-semibold text-lg">The SUILANCE Team</p>
            <p className="text-sm">Innovating the future of work</p>
          </div>
        </div>
      </div>
    </div>
  )
}

