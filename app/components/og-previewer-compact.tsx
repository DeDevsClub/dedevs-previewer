"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { fetchOGData, type OGData } from "../actions/fetch-og-data"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink, Globe, AlertCircle, ImageIcon } from "lucide-react"

export default function OGPreviewerCompact() {
  const [url, setUrl] = useState("")
  const [ogData, setOgData] = useState<OGData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url.trim()) {
      setError("Please enter a URL")
      return
    }

    setIsLoading(true)
    setError(null)
    setOgData(null)

    try {
      const { data, error } = await fetchOGData(url)

      if (error) {
        setError(error)
      } else {
        setOgData(data)
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4 h-full flex flex-col">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 dark:bg-gray-800 dark:border-gray-700"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Preview"}
          </Button>
        </div>
      </form>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex-1 overflow-hidden">
        {isLoading && (
          <Card className="overflow-hidden h-full dark:border-gray-700">
            <Skeleton className="h-4 w-3/4 m-4 dark:bg-gray-700" />
            <Skeleton className="h-[140px] w-full dark:bg-gray-700" />
            <CardContent className="pt-4">
              <Skeleton className="h-4 w-full mb-2 dark:bg-gray-700" />
              <Skeleton className="h-4 w-2/3 dark:bg-gray-700" />
            </CardContent>
          </Card>
        )}

        {ogData && !isLoading && (
          <Card className="overflow-hidden border-2 h-full flex flex-col dark:border-gray-700">
            <div className="p-3 pb-1">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs text-muted-foreground truncate">
                  {ogData.siteName || new URL(ogData.url || url).hostname}
                </p>
              </div>
              <h3 className="font-semibold line-clamp-1 text-sm">{ogData.title || "No title available"}</h3>
            </div>

            {ogData.image ? (
              <div className="relative h-[140px] w-full bg-muted flex-shrink-0 dark:bg-gray-800">
                <Image
                  src={ogData.image || "/placeholder.svg"}
                  alt={ogData.title || "Preview image"}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-[140px] w-full bg-muted flex-shrink-0 dark:bg-gray-800">
                <ImageIcon className="h-10 w-10 text-muted-foreground opacity-50" />
              </div>
            )}

            <CardContent className="pt-3 flex-1 overflow-hidden">
              <p className="text-xs text-muted-foreground line-clamp-3">
                {ogData.description || "No description available"}
              </p>
            </CardContent>

            <div className="border-t bg-muted/50 py-2 px-4 dark:bg-gray-800/50 dark:border-gray-700">
              <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
                <span>{ogData.type ? `Type: ${ogData.type}` : "No type specified"}</span>
                <a
                  href={ogData.url || url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  Visit <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Card>
        )}

        {!isLoading && !ogData && !error && (
          <div className="flex items-center justify-center h-full border-2 border-dashed rounded-lg p-4 dark:border-gray-700">
            <div className="text-center text-muted-foreground">
              <ImageIcon className="mx-auto h-12 w-12 opacity-20" />
              <p className="mt-2 text-sm">Enter a URL to preview Open Graph data</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

