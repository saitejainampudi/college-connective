
import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 h-16 bg-card/80 backdrop-blur-lg border-b border-white/10 z-30 px-6">
      <div className="h-full flex items-center justify-between">
        <div className="flex-1 ml-16">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-white/5">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/5">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
