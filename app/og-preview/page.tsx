import { OGPreviewer } from "@/components/og-previewer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function OGPreviewPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">OG Preview</h1>
        <ThemeToggle />
      </div>
      <OGPreviewer />
      {/* Rest of your content */}
    </div>
  )
}

