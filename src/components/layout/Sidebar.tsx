
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
          "fixed inset-y-0 left-0 w-64 bg-card/80 backdrop-blur-lg border-r border-white/10 transform transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">CLG</h1>
          <nav className="space-y-2">
            <a href="/" className="nav-link block">Dashboard</a>
            <a href="/elections" className="nav-link block">Elections</a>
            <a href="/complaints" className="nav-link block">Complaints</a>
            <a href="/applications" className="nav-link block">Applications</a>
            <a href="/budget" className="nav-link block">Budget</a>
            <a href="/facilities" className="nav-link block">Facilities</a>
            <a href="/profile" className="nav-link block">Profile</a>
          </nav>
        </div>
      </div>
    </>
  );
}
