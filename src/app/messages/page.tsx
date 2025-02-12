"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

export default function MessagesPage() {
  const [message, setMessage] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a2e] py-8">
      <div className="container">
        <Card className="bg-black/20 border-white/10 h-[800px] grid grid-cols-[300px_1fr]">
          <div className="border-r border-white/10">
            <div className="p-4">
              <Input placeholder="Search conversations..." className="bg-white/5" />
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((chat) => (
                <div key={chat} className="p-4 hover:bg-white/5 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://avatar.vercel.sh/user${chat}`} />
                      <AvatarFallback>U{chat}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">User {chat}</p>
                      <p className="text-sm text-gray-400">Last message...</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://avatar.vercel.sh/user1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">User 1</p>
                  <p className="text-sm text-gray-400">Online</p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-auto space-y-4">
              {[1, 2, 3].map((msg) => (
                <div key={msg} className={`flex ${msg % 2 === 0 ? "justify-end" : ""}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg % 2 === 0 ? "bg-gradient-to-r from-purple-400 to-pink-600" : "bg-white/10"
                    }`}
                  >
                    <p className="text-sm">This is a message {msg}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="bg-white/5"
                />
                <Button className="bg-gradient-to-r from-purple-400 to-pink-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

