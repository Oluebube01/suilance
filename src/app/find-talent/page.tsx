import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Star } from "lucide-react"

const skillCategories = [
  "Programming & Tech",
  "Design & Creative",
  "Digital Marketing",
  "Writing & Translation",
  "AI Services",
  "Business",
  "Data",
]

const topFreelancers = [
  { name: "Alex Johnson", title: "Full-Stack Developer", rating: 4.9, hourlyRate: 85 },
  { name: "Sarah Smith", title: "UI/UX Designer", rating: 4.8, hourlyRate: 75 },
  { name: "Michael Brown", title: "Data Scientist", rating: 5.0, hourlyRate: 100 },
  { name: "Emily Davis", title: "Content Strategist", rating: 4.7, hourlyRate: 65 },
]

export default function FindTalentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Find Talent
      </h1>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search for skills or services..."
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Top Rated Freelancers
          </h2>
          {topFreelancers.map((freelancer, index) => (
            <Card key={index} className="bg-black/20 border-white/10 hover:border-white/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://avatar.vercel.sh/${freelancer.name}`} />
                    <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{freelancer.name}</h3>
                    <p className="text-gray-400">{freelancer.title}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-white">{freelancer.rating}</span>
                  </div>
                  <span className="text-gray-400">${freelancer.hourlyRate}/hr</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-400 to-pink-600">
                  Hire {freelancer.name.split(" ")[0]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Skills Categories
          </h2>
          <Card className="bg-black/20 border-white/10">
            <CardContent className="p-4">
              <ul className="space-y-2">
                {skillCategories.map((category, index) => (
                  <li key={index}>
                    <Button variant="link" className="text-gray-300 hover:text-white">
                      {category}
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

