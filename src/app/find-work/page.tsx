import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

const jobCategories = [
  "Web Development",
  "Mobile Apps",
  "Design & Creative",
  "Writing & Translation",
  "AI & Machine Learning",
  "Blockchain & Cryptocurrency",
  "Data Science & Analytics",
]

const featuredJobs = [
  { title: "Full-Stack Developer Needed for Fintech Startup", budget: "$5000-$10000", proposals: 12 },
  { title: "UI/UX Designer for Mobile Game", budget: "$3000-$5000", proposals: 8 },
  { title: "Content Writer for Tech Blog", budget: "$500-$1000", proposals: 25 },
  { title: "Smart Contract Developer for DeFi Project", budget: "$8000-$15000", proposals: 5 },
]

export default function FindWorkPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Find Work
      </h1>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search for jobs..."
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Featured Jobs
          </h2>
          {featuredJobs.map((job, index) => (
            <Card key={index} className="bg-black/20 border-white/10 hover:border-white/20 transition-all">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{job.title}</h3>
                <p className="text-gray-400 mb-4">Budget: {job.budget}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{job.proposals} proposals</span>
                  <Button className="bg-gradient-to-r from-purple-400 to-pink-600">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Job Categories
          </h2>
          <Card className="bg-black/20 border-white/10">
            <CardContent className="p-4">
              <ul className="space-y-2">
                {jobCategories.map((category, index) => (
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

