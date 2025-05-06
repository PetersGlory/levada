import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Levada',
  description: 'Connecting reputable organizations with top verified talents from Africa. We are the architects of a movement, committed to showcasing and propelling African talent to new heights of recognition and success.',
  generator: 'Techta',
  keywords: ['African talent', 'global opportunities', 'talent recruitment', 'career development', 'professional networking', 'job opportunities', 'African professionals'],
  authors: [{ name: 'Levada Team' }],
  creator: 'Levada',
  publisher: 'Levada',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://levada.com',
    siteName: 'Levada',
    title: 'Levada - Connecting African Talent with Global Opportunities',
    description: 'Connecting reputable organizations with top verified talents from Africa. We are the architects of a movement, committed to showcasing and propelling African talent to new heights of recognition and success.',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Levada Platform Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Levada - Connecting African Talent with Global Opportunities',
    description: 'Connecting reputable organizations with top verified talents from Africa. We are the architects of a movement, committed to showcasing and propelling African talent to new heights of recognition and success.',
    images: ['/img/twitter-image.jpg'],
    creator: '@levada',
    site: '@levada',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
