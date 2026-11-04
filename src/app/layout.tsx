import type { Metadata } from "next";
import "./globals.css";
import { Inter, Geist } from "next/font/google"
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ReactQueryProvider } from "@/lib/react-query";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const interFont = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "Board | Product Roadmap",
    default: 'Product Roadmap'
  },
  description: "Follow the development progress of our entire platform.",
};

export default function RootLayout({ children, drawer }: { drawer: React.ReactNode, children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", interFont.className, "font-sans", geist.variable)}
    >
      <body className="bg-navy-950 text-navy-50 antialiased">
        <ReactQueryProvider>
          <NuqsAdapter>
            <>
              {drawer} {children}
            </>
          </NuqsAdapter>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
