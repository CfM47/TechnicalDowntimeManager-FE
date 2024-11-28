'use client'

import { useState } from 'react'

import { SignInForm } from './sign-in-form'
import { SignUpForm } from './sign-up-form'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-white  bg-black hover:bg-gray-800 hover:text-white">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>
            Sign in to your account or create a new one using your username.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm onSuccess={() => setIsOpen(false)} />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm onSuccess={() => setIsOpen(false)} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

