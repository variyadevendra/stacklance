import "@/styles/globals.css"
import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll"
import { Navbar } from "@/components/layout/navbar"
import Script from "next/script"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/blocks/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Stacklance - Your Digital Growth Partner',
  description: 'We transform businesses with cutting-edge technology solutions, delivering measurable results and exceptional user experiences.',
  icons: {
    icon: [
      { url: '/images/stacklance-logo-black.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/stacklance-logo-black.svg', type: 'image/svg+xml' },
    ],
  },
}

const CALENDAR_LINK = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3juYYaJs-C0ng7YEFHqCXyhqIgW6ABc2MaBDoO7OGHTx3xUKFv52RoOoN6NPRpZJ0qyHvMMjjJ?gv=true";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link 
          href="https://calendar.google.com/calendar/scheduling-button-script.css" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Navbar />
            <main className="min-h-screen pt-16">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXX');
            `}
          </Script>
          <Script
            src="https://calendar.google.com/calendar/scheduling-button-script.js"
            strategy="afterInteractive"
          />
          <Script id="google-calendar-scheduling" strategy="afterInteractive">
            {`
              (function() {
                var target = document.currentScript;
                window.addEventListener('load', function() {
                  if (window.calendar && window.calendar.schedulingButton) {
                    calendar.schedulingButton.load({
                      url: '${CALENDAR_LINK}',
                      color: '#2563eb', // Using blue-600 to match your theme
                      label: 'Schedule Meeting',
                      target,
                    });
                  }
                });
              })();
            `}
          </Script>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
} 