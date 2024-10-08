import "note/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "note/trpc/react";
import Sidebar from "./_components/sidebar";

export const metadata: Metadata = {
  title: "Hi Daniel",
  description: "T3 Developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
          <div className="flex h-screen flex-row w-screen relative">
              <Sidebar />
              <div className="flex-grow relative">
                <TRPCReactProvider>{children}</TRPCReactProvider>
              </div>
          </div>
      </body>
    </html>
  );
}
