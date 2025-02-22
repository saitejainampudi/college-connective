
import { 
  Vote, MessageSquare, FileText, Calendar,
  Heart, Building2, Scale, Settings
} from "lucide-react";

const quickAccessItems = [
  {
    title: "Elections",
    icon: Vote,
    description: "View and participate in ongoing elections",
    link: "/elections",
  },
  {
    title: "Complaints",
    icon: MessageSquare,
    description: "Submit or track complaints",
    link: "/complaints",
  },
  {
    title: "Applications",
    icon: FileText,
    description: "Submit new applications",
    link: "/applications",
  },
  {
    title: "Facilities",
    icon: Building2,
    description: "Book campus facilities",
    link: "/facilities",
  },
  {
    title: "Health & Leave",
    icon: Heart,
    description: "Health reports and leave management",
    link: "/health",
  },
  {
    title: "Academic Integrity",
    icon: Scale,
    description: "View academic records and appeals",
    link: "/academic",
  },
  {
    title: "Book Facility",
    icon: Calendar,
    description: "Reserve campus spaces",
    link: "/facilities/book",
  },
  {
    title: "Settings",
    icon: Settings,
    description: "Manage your preferences",
    link: "/settings",
  },
];

export function QuickAccess() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {quickAccessItems.map((item) => (
        <a
          key={item.title}
          href={item.link}
          className="glass-card hover-scale p-6 rounded-xl"
        >
          <item.icon className="h-8 w-8 mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </a>
      ))}
    </div>
  );
}
