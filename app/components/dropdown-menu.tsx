"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HelpCircle, ImageIcon, Settings, FileCode, Lightbulb, AlertCircle, Gauge } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function DropdownMenuComponent() {
  return (
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <HelpCircle className="mr-2 h-4 w-4" />
            OG Image Help
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>OG Image Guide</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <ImageIcon className="mr-2 h-4 w-4" />
              <span>Image Generation</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileCode className="mr-2 h-4 w-4" />
              <span>Meta Tags</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Gauge className="mr-2 h-4 w-4" />
              <span>Optimization</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Lightbulb className="mr-2 h-4 w-4" />
              <span>Testing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AlertCircle className="mr-2 h-4 w-4" />
              <span>Troubleshooting</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeToggle />
    </div>
  )
}

