import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceGallery } from "@/components/service-gallery"
//import { Reviews } from "@/components/reviews"
import { ServiceDescription } from "@/components/service-description"

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a2e] py-8">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            I will create a custom AI solution for your business
          </h1>

          <ServiceGallery />

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="bg-white/5 border-b border-white/10">
              <TabsTrigger value="description" className="text-white">
                Description
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-white">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <ServiceDescription />
            </TabsContent>
            <TabsContent value="reviews">
            reviews
            </TabsContent>
          </Tabs>
        </div>

        
      </div>
    </div>
  )
}

