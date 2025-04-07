"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertCircle,
  Code2,
  FileImage,
  Lightbulb,
  Wrench,
  CheckCircle2,
  ImageIcon,
  FileCode,
  Gauge,
  Search,
  HelpCircle,
  Crop,
  Palette,
  ExternalLink,
} from "lucide-react"
import { CodeBlock } from "./code-block"

export function OGFixDialogs() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2 w-full">
          <Wrench className="h-4 w-4" />
          How to Fix OG Images
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl flex items-center gap-2">
            <FileImage className="h-5 w-5" />
            How to Fix Open Graph Images
          </DialogTitle>
          <DialogDescription>
            A comprehensive guide to implementing and optimizing OG images in Next.js
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="generation" className="w-full">
          <div className="px-6">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="generation" className="text-xs">
                <ImageIcon className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden md:inline">Image Generation</span>
                <span className="inline md:hidden">Generation</span>
              </TabsTrigger>
              <TabsTrigger value="metatags" className="text-xs">
                <FileCode className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden md:inline">Meta Tags</span>
                <span className="inline md:hidden">Meta</span>
              </TabsTrigger>
              <TabsTrigger value="optimization" className="text-xs">
                <Gauge className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden md:inline">Optimization</span>
                <span className="inline md:hidden">Optimize</span>
              </TabsTrigger>
              <TabsTrigger value="testing" className="text-xs">
                <CheckCircle2 className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden md:inline">Testing</span>
                <span className="inline md:hidden">Test</span>
              </TabsTrigger>
              <TabsTrigger value="troubleshooting" className="text-xs">
                <HelpCircle className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden md:inline">Troubleshooting</span>
                <span className="inline md:hidden">Trouble</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="h-[60vh] mt-4 rounded-md">
            <TabsContent value="generation" className="p-6 pt-2 m-0">
              <ImageGenerationContent />
            </TabsContent>

            <TabsContent value="metatags" className="p-6 pt-2 m-0">
              <MetaTagsContent />
            </TabsContent>

            <TabsContent value="optimization" className="p-6 pt-2 m-0">
              <OptimizationContent />
            </TabsContent>

            <TabsContent value="testing" className="p-6 pt-2 m-0">
              <TestingContent />
            </TabsContent>

            <TabsContent value="troubleshooting" className="p-6 pt-2 m-0">
              <TroubleshootingContent />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export function ImageGenerationContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Image Generation Options</h3>
        <p className="text-muted-foreground mb-4">
          There are several approaches to generating Open Graph images for your Next.js application:
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="static">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1 rounded-md">
                  <FileImage className="h-4 w-4 text-primary" />
                </div>
                <span>Static Images</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  The simplest approach is to use static images stored in your project's <code>public</code> directory.
                </p>

                <div className="pl-4 border-l-2 border-muted">
                  <p className="text-sm font-medium">Steps:</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Create an image with dimensions 1200×630 pixels</li>
                    <li>
                      Save the image in your <code>public</code> directory (e.g., <code>public/og-image.jpg</code>)
                    </li>
                    <li>Reference the image in your meta tags using the absolute URL</li>
                  </ol>
                </div>

                <CodeBlock
                  code={`// In your metadata configuration
export const metadata = {
  openGraph: {
    images: [
      {
        url: '/og-image.jpg', // This resolves to yourdomain.com/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Your OG Image Alt Text',
      },
    ],
  },
}`}
                  language="typescript"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dynamic">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1 rounded-md">
                  <Code2 className="h-4 w-4 text-primary" />
                </div>
                <span>Dynamic Generation with @vercel/og</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  For dynamic OG images based on content, use the <code>@vercel/og</code> library to generate images
                  on-the-fly.
                </p>

                <div className="pl-4 border-l-2 border-muted">
                  <p className="text-sm font-medium">Steps:</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
                    <li>
                      Install the <code>@vercel/og</code> package
                    </li>
                    <li>Create an API route to generate the image</li>
                    <li>Reference the API route in your meta tags</li>
                  </ol>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Installation</AlertTitle>
                  <AlertDescription>
                    Install the package with: <code>npm install @vercel/og</code>
                  </AlertDescription>
                </Alert>

                <CodeBlock
                  code={`// app/api/og/route.tsx
import { ImageResponse } from '@vercel/og';
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get dynamic params
    const title = searchParams.get('title') || 'Default Title';
    
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            color: 'black',
            background: 'white',
            width: '100%',
            height: '100%',
            padding: '50px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    return new Response('Failed to generate image', { status: 500 });
  }
}`}
                  language="typescript"
                />

                <CodeBlock
                  code={`// In your metadata configuration
export const metadata = {
  openGraph: {
    images: [
      {
        url: \`\${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=\${encodeURIComponent('Your Dynamic Title')}\`,
        width: 1200,
        height: 630,
        alt: 'Your OG Image Alt Text',
      },
    ],
  },
}`}
                  language="typescript"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="template">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1 rounded-md">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </div>
                <span>Template-Based Generation</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>Create template-based OG images by combining a background image with dynamic text.</p>

                <div className="pl-4 border-l-2 border-muted">
                  <p className="text-sm font-medium">Steps:</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Design a template background with space for text</li>
                    <li>
                      Use <code>@vercel/og</code> to overlay dynamic text
                    </li>
                    <li>Optionally use custom fonts for better branding</li>
                  </ol>
                </div>

                <CodeBlock
                  code={`// app/api/og/route.tsx
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Default Title';
    
    // Load custom font
    const fontData = await fetch(
      new URL('../../assets/font.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    
    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'url(https://yourdomain.com/og-template.jpg)',
            backgroundSize: '1200px 630px',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'CustomFont',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e) {
    return new Response('Failed to generate image', { status: 500 });
  }
}`}
                  language="typescript"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Alert className="bg-amber-50 text-amber-800 border-amber-200">
        <Lightbulb className="h-4 w-4 text-amber-500" />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>
          For content-heavy sites, consider automating OG image generation based on your content's title, featured
          image, or other metadata to maintain consistency across all pages.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function MetaTagsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Implementing Meta Tags</h3>
        <p className="text-muted-foreground mb-4">
          Next.js provides several ways to add Open Graph meta tags to your application:
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="metadata-api">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1 rounded-md">
                  <FileCode className="h-4 w-4 text-primary" />
                </div>
                <span>Using the Metadata API (Recommended)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>Next.js 13+ provides a Metadata API that makes it easy to add meta tags to your pages.</p>

                <div className="pl-4 border-l-2 border-muted">
                  <p className="text-sm font-medium">Steps:</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
                    <li>
                      Export a <code>metadata</code> object or <code>generateMetadata</code> function from your page or
                      layout
                    </li>
                    <li>
                      Include the <code>openGraph</code> property with your OG configuration
                    </li>
                  </ol>
                </div>

                <CodeBlock
                  code={`// app/page.tsx or app/layout.tsx
import { Metadata } from 'next';

export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  openGraph: {
    title: 'Your OG Title',
    description: 'Your OG description',
    url: 'https://yourdomain.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your OG Image Alt Text',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Twitter Title',
    description: 'Your Twitter description',
    images: ['https://yourdomain.com/og-image.jpg'],
  },
};

export default function Page() {
  return <div>Your page content</div>;
}`}
                  language="typescript"
                />

                <p className="text-sm">For dynamic metadata based on route parameters or external data:</p>

                <CodeBlock
                  code={`// app/blog/[slug]/page.tsx
import { Metadata } from 'next';

// Define the generateMetadata function
// export async function generateMetadata(
//   { params }: { params: { slug: string } }
// ): Promise<Metadata> {
//   // Fetch data for the specific blog post
//   const post = await fetchPostBySlug(params.slug);
  
//   return {
//     title: post.title,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       url: \`https://yourdomain.com/blog/\${params.slug}\`,
//       siteName: 'Your Blog Name',
//       images: [
//         {
//           url: post.ogImage || 'https://yourdomain.com/default-og.jpg',
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//       locale: 'en_US',
//       type: 'article',
//       publishedTime: post.publishedAt,
//       authors: [post.author],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.excerpt,
//       images: [post.ogImage || 'https://yourdomain.com/default-og.jpg'],
//     },
//   };
// }`}
                  language="typescript"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Alert className="bg-amber-50 text-amber-800 border-amber-200">
        <Lightbulb className="h-4 w-4 text-amber-500" />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>
          Always use absolute URLs for your OG images. Relative URLs may not work correctly when your content is shared
          on social media platforms.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function OptimizationContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Image Optimization Best Practices</h3>
        <p className="text-muted-foreground mb-4">
          Optimize your Open Graph images for better performance and visual quality:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-md">
                <Crop className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-medium">Dimensions</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Use 1200×630 pixels for optimal display across platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Minimum recommended size is 600×315 pixels</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Maintain a 1.91:1 aspect ratio (width:height)</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-md">
                <FileImage className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-medium">File Format</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Use WebP for better compression and quality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>JPEG is a good fallback for broader compatibility</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Keep file size under 1MB (ideally under 200KB)</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-md">
                <Gauge className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-medium">Performance</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Use Next.js Image Optimization for static images</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Cache dynamically generated images when possible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Use CDN for serving images faster</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-md">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-medium">Design</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Include your logo for brand recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <span>Use readable text (if including text in the image)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Use readable text (if including text in the image)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Maintain a 40% text to 60% image ratio for best results</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-medium mb-2">Using Next.js Image Optimization</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Next.js provides built-in image optimization that can help with your OG images:
          </p>

          <CodeBlock
            code={`// next.config.js
module.exports = {
  images: {
    domains: ['yourdomain.com'], // Add domains you want to optimize images from
    formats: ['image/webp'], // Specify preferred formats
    // For static OG images in the public directory, no additional config needed
  },
};`}
            language="javascript"
          />

          <p className="text-sm text-muted-foreground mt-3">
            When using the <code>next/image</code> component for images that might be used as OG images:
          </p>

          <CodeBlock
            code={`import Image from 'next/image';

// This optimized image can be referenced in your OG meta tags
<Image
  src="/path-to-image.jpg"
  alt="Description"
  width={1200}
  height={630}
  quality={90} // Higher quality for OG images
  priority={true} // Load this image before others
/>`}
            language="jsx"
          />
        </div>
      </div>

      <Alert className="bg-amber-50 text-amber-800 border-amber-200">
        <Lightbulb className="h-4 w-4 text-amber-500" />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>
          Test your OG images on different devices and platforms to ensure they look good at various sizes. What looks
          good on desktop might not work well on mobile.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function TestingContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Testing and Validation</h3>
        <p className="text-muted-foreground mb-4">
          Before deploying, test your Open Graph implementation to ensure it works correctly:
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="tools">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1 rounded-md">
                  <Wrench className="h-4 w-4 text-primary" />
                </div>
                <span>Validation Tools</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Facebook Sharing Debugger</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The official tool for testing how your content will appear when shared on Facebook.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Shows a preview of how your link will appear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Displays any errors or warnings in your OG tags</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Allows you to refresh Facebook's cache of your URL</span>
                    </li>
                  </ul>
                  <a
                    href="https://developers.facebook.com/tools/debug/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                  >
                    Open Facebook Sharing Debugger
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Twitter Card Validator</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Test how your content will appear when shared on Twitter.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Shows a preview of your Twitter card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Validates Twitter-specific meta tags</span>
                    </li>
                  </ul>
                  <a
                    href="https://cards-dev.twitter.com/validator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                  >
                    Open Twitter Card Validator
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">LinkedIn Post Inspector</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Test how your content will appear when shared on LinkedIn.
                  </p>
                  <a
                    href="https://www.linkedin.com/post-inspector/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                  >
                    Open LinkedIn Post Inspector
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Open Graph Check</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    A general-purpose OG tag validator that works across multiple platforms.
                  </p>
                  <a
                    href="https://www.opengraph.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                  >
                    Open OpenGraph.xyz
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="testing-process">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1 rounded-md">
                  <Wrench className="h-4 w-4 text-primary" />
                </div>
                <span>Testing Process</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>Follow this step-by-step process to thoroughly test your OG implementation:</p>

                <div className="pl-4 border-l-2 border-muted space-y-4">
                  <div>
                    <p className="text-sm font-medium">1. Deploy your changes</p>
                    <p className="text-sm text-muted-foreground">
                      Make sure your changes are deployed to a publicly accessible URL. Social media platforms can't
                      access localhost.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">2. Check meta tags in the browser</p>
                    <p className="text-sm text-muted-foreground">
                      Use browser developer tools to inspect the <code>&lt;head&gt;</code> section and verify your OG
                      tags are present.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Right-click on your page → Inspect → Elements → Search for "og:"
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">3. Validate with tools</p>
                    <p className="text-sm text-muted-foreground">
                      Use the validation tools mentioned above to check how your content appears on different platforms.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">4. Test on multiple platforms</p>
                    <p className="text-sm text-muted-foreground">
                      If possible, test actual sharing on different platforms to see real-world results.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">5. Check on different devices</p>
                    <p className="text-sm text-muted-foreground">
                      Verify how your OG images appear on both desktop and mobile devices.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="common-issues">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1 rounded-md">
                  <AlertCircle className="h-4 w-4 text-primary" />
                </div>
                <span>Common Testing Issues</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm">Caching Issues</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Social platforms cache OG data. Use the "Scrape Again" or similar option in validation tools to
                    refresh the cache.
                  </p>
                </div>

                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm">Image Not Showing</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ensure your image URL is absolute and the image is publicly accessible. Check that the image meets
                    minimum size requirements.
                  </p>
                </div>

                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm">Wrong Image Displayed</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    If the wrong image appears, check for conflicting meta tags or ensure your OG image is specified
                    correctly.
                  </p>
                </div>

                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm">Text Truncation</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Titles and descriptions may be truncated on different platforms. Keep titles under 60 characters and
                    descriptions under 160 characters.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Alert className="bg-amber-50 text-amber-800 border-amber-200">
        <Lightbulb className="h-4 w-4 text-amber-500" />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>
          Create a simple test page with minimal content to isolate and debug OG issues before implementing in your main
          application.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function TroubleshootingContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Troubleshooting Common Issues</h3>
        <p className="text-muted-foreground mb-4">Solutions for common Open Graph implementation problems:</p>

        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-3 border-b">
              <h4 className="font-medium">Images Not Appearing</h4>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground">If your OG images aren't appearing when shared:</p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Check image URL</p>
                    <p className="text-xs text-muted-foreground">
                      Ensure the image URL is absolute (starts with https://) and publicly accessible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Verify image dimensions</p>
                    <p className="text-xs text-muted-foreground">
                      Ensure your image meets the minimum size requirements (600×315 pixels).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Check CORS headers</p>
                    <p className="text-xs text-muted-foreground">
                      Ensure your server allows cross-origin requests for the image.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Refresh cache</p>
                    <p className="text-xs text-muted-foreground">
                      Use validation tools to refresh the platform's cache of your URL.
                    </p>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// Example of properly formatted image URLs in metadata
export const metadata = {
  openGraph: {
    images: [
      {
        url: 'https://yourdomain.com/images/og-image.jpg', // Absolute URL
        width: 1200,
        height: 630,
        alt: 'Description',
      },
    ],
  },
};`}
                language="typescript"
              />
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-3 border-b">
              <h4 className="font-medium">Dynamic OG Images Not Updating</h4>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground">If your dynamically generated OG images aren't updating:</p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Add cache control headers</p>
                    <p className="text-xs text-muted-foreground">
                      Set appropriate cache control headers for your dynamic OG image routes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Add a version parameter</p>
                    <p className="text-xs text-muted-foreground">
                      Add a version or timestamp parameter to force cache invalidation.
                    </p>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// app/api/og/route.tsx
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  // Set cache control headers
  const headers = new Headers();
  headers.set('Cache-Control', 'public, max-age=60, s-maxage=60');
  
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Default Title';
    
    return new ImageResponse(
      (
        <div style={{ /* ... */ }}>
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers,
      },
    );
  } catch (e) {
    return new Response('Failed to generate image', { status: 500 });
  }
}`}
                language="typescript"
              />

              <CodeBlock
                code={`// Using a version parameter to force cache invalidation
export const metadata = {
  openGraph: {
    images: [
      {
        url: \`\${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=\${encodeURIComponent('Title')}&v=\${Date.now()}\`,
        width: 1200,
        height: 630,
        alt: 'Description',
      },
    ],
  },
};`}
                language="typescript"
              />
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-3 border-b">
              <h4 className="font-medium">Meta Tags Not Being Picked Up</h4>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground">If social platforms aren't recognizing your meta tags:</p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Check tag format</p>
                    <p className="text-xs text-muted-foreground">
                      Ensure your meta tags are correctly formatted with the proper property attributes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Verify tag placement</p>
                    <p className="text-xs text-muted-foreground">
                      Ensure your meta tags are correctly formatted with the proper property attributes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Check for conflicting tags</p>
                    <p className="text-xs text-muted-foreground">
                      Ensure you don't have duplicate or conflicting OG tags.
                    </p>
                  </div>
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Common Mistake</AlertTitle>
                <AlertDescription>
                  When using the App Router, make sure you're using the Metadata API correctly. If you're using the
                  Pages Router, ensure you're using <code>next/head</code> properly.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-3 border-b">
              <h4 className="font-medium">Debugging Tools</h4>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground">Useful tools for debugging OG issues:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a
                  href="https://developers.facebook.com/tools/debug/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border rounded-md hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-primary" />
                    <span className="text-sm">Facebook Debugger</span>
                  </div>
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>

                <a
                  href="https://www.opengraph.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border rounded-md hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-primary" />
                    <span className="text-sm">OpenGraph.xyz</span>
                  </div>
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Alert className="bg-amber-50 text-amber-800 border-amber-200">
        <Lightbulb className="h-4 w-4 text-amber-500" />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>
          Create a simple test page with minimal content to isolate and debug OG issues before implementing in your main
          application.
        </AlertDescription>
      </Alert>
    </div>
  )
}

