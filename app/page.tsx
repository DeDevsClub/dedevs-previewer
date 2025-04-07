"use client";

import type React from "react";

import type { Metadata } from "next";
import OGPreviewerCompact from "./components/og-previewer-compact";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ImageIcon,
  ExternalLink,
  FileCode,
  Lightbulb,
  BookOpen,
  Link2,
  Maximize2,
  Crop,
  FileImage,
  Code2,
  Palette,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export default function OGDashboardPage() {
  const [howToUseOpen, setHowToUseOpen] = useState(true);
  const [tipsOpen, setTipsOpen] = useState(true);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Open Graph Dashboard
          </h1>
          <p className="text-muted-foreground">
            Preview and optimize your Open Graph images for better social
            sharing
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" className="gap-1" onClick={() => window.open("https://docs.dedevs.club", "_blank")}>
            <FileCode className="h-4 w-4" />
            View Docs
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Section 1: OG Previewer (Full row) */}
        <Card className="w-full overflow-hidden dark:border-gray-700">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Open Graph Previewer</CardTitle>
              <Badge variant="outline" className="gap-1">
                <Maximize2 className="h-3 w-3" />
                Live Preview
              </Badge>
            </div>
            <CardDescription>
              Enter a URL to see how it appears when shared
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[450px]">
            <OGPreviewerCompact />
          </CardContent>
        </Card>

        {/* Section 2: How to Use (Full row) */}
        <Collapsible
          open={howToUseOpen}
          onOpenChange={setHowToUseOpen}
          className="w-full"
        >
          <Card className="w-full dark:border-gray-700">
          <CollapsibleTrigger asChild className="w-full cursor-pointer">
            <CardHeader className="mb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  How to Use
                </CardTitle>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    {howToUseOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle section</span>
                  </Button>
              </div>
            </CardHeader>
                </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 "
                style={{borderTop: "1px solid rgb(62, 61, 62)"}}
                >
                  <div className="flex gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Enter a URL</h3>
                      <p className="text-sm text-muted-foreground">
                        Paste a complete URL (with http:// or https://) into the
                        input field
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Click Preview</h3>
                      <p className="text-sm text-muted-foreground">
                        The system will fetch and display the Open Graph data
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Analyze Results</h3>
                      <p className="text-sm text-muted-foreground">
                        Review the title, description, image, and other metadata
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Section 3: Tips for Fixing OG Images (Full row) */}
        <Collapsible
          open={tipsOpen}
          onOpenChange={setTipsOpen}
          className="w-full"
        >
          <Card className="w-full overflow-hidden dark:border-gray-700">
            <CollapsibleTrigger asChild className="w-full cursor-pointer">
              <CardHeader className="mb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-amber-500" />
                    Tips for Fixing OG Images
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    {tipsOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle section</span>
                  </Button>
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:space-y-4 sm:space-x-2 sm:grid-cols-2 pt-4"
                style={{borderTop: "1px solid rgb(62, 61, 62)"}}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted dark:bg-gray-800">
                        <Crop className="h-4 w-4" />
                      </div>
                      <h3 className="font-medium">Optimal Dimensions</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use 1200×630 pixels for best display across platforms.
                      Minimum size should be 600×315 pixels.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted dark:bg-gray-800">
                        <FileImage className="h-4 w-4" />
                      </div>
                      <h3 className="font-medium">File Format</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use WebP for better compression or fallback to JPEG/PNG.
                      Keep file size under 1MB.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted dark:bg-gray-800">
                        <Code2 className="h-4 w-4" />
                      </div>
                      <h3 className="font-medium">Dynamic Generation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use Next.js API routes or @vercel/og to generate dynamic
                      OG images based on content.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted dark:bg-gray-800">
                        <Palette className="h-4 w-4" />
                      </div>
                      <h3 className="font-medium">Design Tips</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Include your logo, use readable text, and maintain a 40%
                      text to 60% image ratio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Section 4: Additional Resources (Full row) */}
        <Collapsible
          open={resourcesOpen}
          onOpenChange={setResourcesOpen}
          className="w-full"
        >
          <Card className="w-full dark:border-gray-700">
          <CollapsibleTrigger asChild className="w-full cursor-pointer">
              <CardHeader className="mb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="h-5 w-5 text-primary" />
                    Additional Resources
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    {resourcesOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle section</span>
                  </Button>
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2"
                  style={{borderTop: "1px solid rgb(62, 61, 62)"}}
                >
                  <a
                    href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-md hover:bg-muted transition-colors dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                        <FileCode className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Next.js Metadata API</p>
                        <p className="text-sm text-muted-foreground">
                          Official documentation for metadata in Next.js
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>

                  <a
                    href="https://vercel.com/docs/functions/edge-functions/og-image-generation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-md hover:bg-muted transition-colors dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                        <ImageIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">
                          Vercel OG Image Generation
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Create dynamic OG images with @vercel/og
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>

                  <a
                    href="https://ogp.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-md hover:bg-muted transition-colors dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Open Graph Protocol</p>
                        <p className="text-sm text-muted-foreground">
                          Official OG protocol specification
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </div>
  );
}
