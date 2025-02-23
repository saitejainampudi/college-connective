
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { QuickAccess } from "@/components/dashboard/QuickAccess";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const recentUpdates = [
    {
      id: 1,
      category: "Academic",
      title: "Mid-Semester Exams Schedule Released",
      date: "2024-02-22",
      description: "Check your exam schedule on the academic portal"
    },
    {
      id: 2,
      category: "Event",
      title: "Annual Tech Fest Registration Open",
      date: "2024-02-21",
      description: "Register now for workshops and competitions"
    },
    {
      id: 3,
      category: "Campus",
      title: "New Library Hours Announcement",
      date: "2024-02-20",
      description: "Library will now be open until 10 PM on weekdays"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to CLG</h1>
            <p className="text-lg text-muted-foreground">
              Your digital campus management system
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Quick Access</h2>
            <QuickAccess />
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Recent Updates</h2>
            <div className="space-y-4">
              {recentUpdates.map((update) => (
                <div key={update.id} className="p-4 bg-accent rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {update.category}
                      </Badge>
                      <h3 className="font-semibold">{update.title}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {update.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {update.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
