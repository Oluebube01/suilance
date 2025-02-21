import { PopularServices } from "@/components/popular-service"
import { SearchHeader } from "@/components/search-header"
import { SellerCards } from "@/components/seller-cards"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a2e]">
      <Navbar />
      <SearchHeader />
      <main>
        <PopularServices />
        <SellerCards />
      </main>
      <Footer />
    </div>
  )
}

