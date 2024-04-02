import { useState } from "react"
"use client"
import "./styles.scss"
import DesktopSidebar from "./components/deskTopSidebar";
import { usePathname } from 'next/navigation'
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <section className="container card mx-5 my-3 grid grid-cols-4 gap-4">
      <DesktopSidebar pathname={pathname}/>
      <div className="visible md:invisible ">
        small div
      </div>
      <div className="grid-cols-3">
        {children}
      </div>
    </section>
  )
}