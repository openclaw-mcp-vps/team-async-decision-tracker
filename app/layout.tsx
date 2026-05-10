import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DecisionTrack — Track decisions made in async conversations',
  description: 'Automatically extract and track decisions, action items, and deadlines from your Slack and Discord conversations. Built for remote team managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b0563301-baf0-4eb7-9da2-57ea520e0aee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
