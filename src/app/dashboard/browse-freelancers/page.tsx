"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search } from "lucide-react"

const FREELANCERS = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Full Stack Developer",
    rating: 4.9,
    reviews: 128,
    hourlyRate: 45,
    skills: ["React", "Node.js", "TypeScript"],
    completedProjects: 89,
    image: "https://avatar.vercel.sh/alex",
  },
  {
    id: 2,
    name: "Sarah Smith",
    title: "UI/UX Designer",
    rating: 5.0,
    reviews: 95,
    hourlyRate: 55,
    skills: ["Figma", "Adobe XD", "Webflow"],
    completedProjects: 64,
    image: "https://avatar.vercel.sh/sarah",
  },
  // Add more freelancers as needed
]

export default function BrowseFreelancersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [skillFilter, setSkillFilter] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Browse Freelancers</h1>
        <Button>Post a Job</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search freelancers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={skillFilter} onValueChange={setSkillFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by skill" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="node">Node.js</SelectItem>
            <SelectItem value="design">UI/UX Design</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {FREELANCERS.map((freelancer) => (
          <Card key={freelancer.id} className="hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={freelancer.image} />
                    <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{freelancer.rating}</span>
                    <span className="text-muted-foreground">({freelancer.reviews})</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="font-semibold text-lg">{freelancer.name}</h3>
                    <p className="text-muted-foreground">{freelancer.title}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {freelancer.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    <span>${freelancer.hourlyRate}/hr</span>
                    <span>{freelancer.completedProjects} Projects Completed</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-w-[120px] items-center md:items-end">
                  <Button className="w-full md:w-auto">Hire Now</Button>
                  <Button variant="outline" className="w-full md:w-auto">
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

