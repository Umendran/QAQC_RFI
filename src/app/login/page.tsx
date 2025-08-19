"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Github, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 px-4 py-5 sm:px-6">
          <CardTitle className="text-2xl font-bold text-center">ERS QAQC RFI</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="ex@ers.my" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} required />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </Label>
            </div>
            <Button className="w-full h-11" type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
              <Link href="/admin">
          <button className="w-full h-11">Go to Admin</button>
        </Link>
          </form>

          {/* <div className="flex items-center">
            <Separator className="flex-1" />
            <span className="mx-2 text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <div className="grid gap-2">
            <Button variant="outline" className="w-full h-11" type="button">
              <Github className="mr-2 h-5 w-5" />
              Continue with GitHub
            </Button>
            <Button variant="outline" className="w-full h-11" type="button">
              <Mail className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>
          </div> */}
        </CardContent>
        {/* <CardFooter className="flex justify-center px-4 py-5 sm:px-6">
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter> */}
      </Card>
    </div>
  )
}
