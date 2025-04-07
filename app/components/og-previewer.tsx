"use client"

import type React from "react"

import { useState } from "react"
import { fetchOGData } from "@/app/actions/fetch-og-data"
import { CodeBlock } from "./code-block"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, ExternalLink } from "lucide-react"

export default function OGPreviewer() {
  const [url, setUrl] = useState("")
  const [ogData, setOgData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const data = await fetchOGData(url)
      setOgData(data)
    } catch (err) {
      setError("Failed to fetch OG data. Please check the URL and try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="dark:border-gray-700">
        <CardHeader>
          <CardTitle>Enter a URL to preview its OG image</CardTitle>
          <CardDescription>See how your website appears when shared on social media</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="flex-1 dark:bg-gray-800 dark:border-gray-700"
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Preview"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {ogData && (
        <div className="space-y-6">
          <Card className="dark:border-gray-700">
            <CardHeader>
              <CardTitle>OG Image Preview</CardTitle>
              <CardDescription>This is how your website will appear when shared</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                {ogData.ogImage ? (
                  <img
                    src={ogData.ogImage || "/placeholder.svg"}
                    alt={ogData.ogTitle || "OG Image"}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="bg-gray-100 dark:bg-gray-800 p-12 text-center text-gray-500 dark:text-gray-400">
                    No OG image found
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{ogData.ogTitle || "No title found"}</h3>
                <p className="text-gray-500 dark:text-gray-400">{ogData.ogDescription || "No description found"}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 hover:underline"
                >
                  {url} <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="metadata">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="metadata">Metadata</TabsTrigger>
              <TabsTrigger value="json">JSON</TabsTrigger>
            </TabsList>
            <TabsContent value="metadata" className="space-y-4">
              <Card className="dark:border-gray-700">
                <CardHeader>
                  <CardTitle>OG Metadata</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-medium text-gray-500 dark:text-gray-400">Title</dt>
                      <dd>{ogData.ogTitle || "Not found"}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500 dark:text-gray-400">Description</dt>
                      <dd>{ogData.ogDescription || "Not found"}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500 dark:text-gray-400">Image URL</dt>
                      <dd className="break-all">
                        {ogData.ogImage ? (
                          <a
                            href={ogData.ogImage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                          >
                            {ogData.ogImage} <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          "Not found"
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500 dark:text-gray-400">Type</dt>
                      <dd>{ogData.ogType || "Not found"}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500 dark:text-gray-400">URL</dt>
                      <dd>{ogData.ogUrl || "Not found"}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="json">
              <Card className="dark:border-gray-700">
                <CardHeader>
                  <CardTitle>JSON Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={JSON.stringify(ogData, null, 2)} language="json" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
