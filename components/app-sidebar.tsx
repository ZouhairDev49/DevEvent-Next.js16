'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { 
  Calendar, 
  MapPin, 
  Users2, 
  Ticket, 
  Settings, 
  LayoutDashboard,
  ChevronRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const data = {
  navMain: [
    {
      title: "Event Management",
      items: [
        { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        { title: "Events", url: "/admin-events", icon: Calendar },
        { title: "Venues", url: "/admin/venues", icon: MapPin },
      ],
    },
    {
      title: "Registration",
      items: [
        { title: "Attendees", url: "/admin/attendees", icon: Users2 },
        { title: "Tickets", url: "/admin/tickets", icon: Ticket },
      ],
    },
  ],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* <Image src="/icons/logo.png" alt="logo" width={24} height={24} /> */}
      </SidebarHeader>
      {/* <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent> */}
      <SidebarContent className="gap-0">
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest px-4 py-4">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.url

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={isActive}
                        tooltip={item.title}
                        className={`
                          transition-all duration-200 
                          ${isActive 
                            ? "bg-primary/10 text-primary font-medium hover:bg-primary/15" 
                            : "hover:bg-accent/50 text-muted-foreground"
                          }
                        `}
                      >
                        <Link href={item.url} className="flex items-center gap-3">
                          {item.icon && <item.icon className={`size-4 ${isActive ? "text-primary" : ""}`} />}
                          <span>{item.title}</span>
                          {isActive && <ChevronRight className="ml-auto size-3" />}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
