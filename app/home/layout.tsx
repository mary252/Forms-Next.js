import { useState } from "react"
"use client"
import "./styles.scss"
import DesktopSidebar from "./components/deskTopSidebar";
import ResponsiveBar from "./components/responiveBar";
import { usePathname } from 'next/navigation'
import useScreenSize from 'use-screen-size'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  
  const pathname = usePathname()
  const size = useScreenSize()
  return (
    <section className={`container md:flex ${size.screen !=="xs" && "card mx-5 my-3"}  `}>
      {size.screen=== 'xs'? <ResponsiveBar pathname={pathname}/> :<DesktopSidebar pathname={pathname}/> }
      
      {children}
    </section>
  )
}