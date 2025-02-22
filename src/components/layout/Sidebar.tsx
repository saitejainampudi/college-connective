
import { useState } from "react";
import { 
  Menu, X, Home, Vote, MessageSquare, FileText, 
  DollarSign, Heart, Building2, Scale, User, 
  ShieldAlert, Search, HelpCircle, Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Dashboard", icon: Home, href: "/" },
  { title: "Elections", icon: Vote, href: "/elections" },
  { title: "Complaints", icon: MessageSquare, href: "/complaints" },
  { title: "Applications", icon: FileText, href: "/applications" },
  { title: "Budget", icon: DollarSign, href: "/budget" },
  { title: "Health & Leave", icon: Heart, href: "/health" },
  { title: "Facilities", icon: Building2, href: "/facilities" },
  { title: "Academic Integrity", icon: Scale, href: "/academic" },
  { title: "Profile", icon: User, href: "/profile" },
  { title: "Admin Panel", icon: ShieldAlert, href: "/admin" },
  { title: "Help & Support", icon: HelpCircle, href: "/help" },
  { title: "Settings", icon: Settings, href: "/settings" }
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-card/80 backdrop-blur-lg border border-white/10"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-card/80 backdrop-blur-lg border-r border-white/10 transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">CLG</h1>
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="nav-link flex items-center gap-3 py-2"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
