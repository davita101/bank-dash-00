"use client"
import { AppSidebar } from "./components/app-sidebar";
import Header from "./components/Header";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import "./styles/globals.css"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <SidebarProvider  >
            <AppSidebar />
            <SidebarTrigger />
            <div className="flex flex-col w-full lg:pl-[40px] pl-[0px]">
              <Header />
              {children}
            </div>
          </SidebarProvider>
        </body>
      </html >

  );
}
