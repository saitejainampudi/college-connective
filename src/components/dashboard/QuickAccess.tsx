
import { FileText, MessageSquare, Vote, Calendar } from "lucide-react";

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
    icon: Calendar,
    description: "Book campus facilities",
    link: "/facilities",
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
