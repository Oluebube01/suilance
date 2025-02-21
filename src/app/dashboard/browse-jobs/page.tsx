"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Briefcase, Clock, DollarSign } from "lucide-react"

const JOBS = [
  {
    id: 1,
    title: "Senior React Developer Needed for Fintech Project",
    description: "Looking for an experienced React developer to help build a modern fintech dashboard...",
    budget: "5000-8000",
    duration: "3 months",
    skills: ["React", "TypeScript", "Node.js"],
    proposals: 12,
    postedAt: "2 hours ago",
    type: "Fixed Price",
  },
  {
    id: 2,
    title: "UI/UX Designer for Mobile App",
    description: "Need a talented designer to create a modern and intuitive interface for our mobile app...",
    budget: "3000-5000",
    duration: "2 months",
    skills: ["Figma", "UI Design", "Mobile Design"],
    proposals: 8,
    postedAt: "5 hours ago",
    type: "Fixed Price",
  },
  // Add more jobs as needed
]

export default function BrowseJobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Browse Jobs</h1>
        <Button>Post a Job</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="development">Development</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="writing">Writing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {JOBS.map((job) => (
          <Card key={job.id} className="hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{job.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>${job.budget}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  <div className="text-muted-foreground">Posted {job.postedAt}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-6 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">{job.proposals} proposals</div>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

