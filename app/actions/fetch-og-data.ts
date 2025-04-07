"use server"

import { load } from "cheerio"

export type OGData = {
  title: string | null
  description: string | null
  image: string | null
  url: string | null
  siteName: string | null
  type: string | null
}

export async function fetchOGData(url: string): Promise<{ data: OGData | null; error: string | null }> {
  try {
    // Validate URL format
    let validUrl: URL
    try {
      validUrl = new URL(url)
      // If no protocol is specified, default to https
      if (!validUrl.protocol || validUrl.protocol === ":") {
        validUrl = new URL(`https://${url}`)
      }
    } catch (e) {
      return { data: null, error: "Invalid URL format" }
    }

    // Fetch the HTML content
    const response = await fetch(validUrl.toString(), {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; OGPreviewerBot/1.0)",
      },
    })

    if (!response.ok) {
      return { data: null, error: `Failed to fetch URL: ${response.statusText}` }
    }

    const html = await response.text()

    // Parse the HTML using cheerio
    const $ = load(html)

    // Extract OG meta tags
    const ogData: OGData = {
      title: $('meta[property="og:title"]').attr("content") || $("title").text() || null,
      description:
        $('meta[property="og:description"]').attr("content") || $('meta[name="description"]').attr("content") || null,
      image: $('meta[property="og:image"]').attr("content") || null,
      url: $('meta[property="og:url"]').attr("content") || validUrl.toString(),
      siteName: $('meta[property="og:site_name"]').attr("content") || null,
      type: $('meta[property="og:type"]').attr("content") || null,
    }

    // Check if we found any OG data
    const hasOGData = Object.values(ogData).some((value) => value !== null)

    if (!hasOGData) {
      return { data: null, error: "No Open Graph data found for this URL" }
    }

    return { data: ogData, error: null }
  } catch (error) {
    console.error("Error fetching OG data:", error)
    return { data: null, error: "Failed to fetch or parse Open Graph data" }
  }
}

