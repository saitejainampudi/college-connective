
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Applications = () => {
  const applications = [
    {
      id: 1,
      type: "Event Organization",
      title: "Tech Fest 2024",
      status: "Under Review",
      submitted: "2024-02-20",
      budget: 50000,
      description: "Annual technology festival with workshops and competitions"
    },
    {
      id: 2,
      type: "Sponsorship",
      title: "Robotics Competition",
      status: "Approved",
      submitted: "2024-02-15",
      budget: 25000,
      description: "Inter-college robotics competition"
    },
    {
      id: 3,
      type: "Budget Request",
      title: "Lab Equipment",
      status: "Completed",
      submitted: "2024-02-10",
      budget: 75000,
      description: "New equipment for the computer science lab"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Applications</h1>
            <p className="text-lg text-muted-foreground">
              Submit and track your applications
            </p>
            <Button className="mt-6">New Application</Button>
          </section>

          <section className="glass-card rounded-xl p-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="event">Events</TabsTrigger>
                <TabsTrigger value="sponsorship">Sponsorship</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{app.title}</h3>
                        <p className="text-sm text-muted-foreground">{app.type}</p>
                      </div>
                      <Badge variant={
                        app.status === "Approved" ? "default" :
                        app.status === "Completed" ? "secondary" : "outline"
                      }>
                        {app.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{app.description}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Submitted: {app.submitted}</span>
                      <span>Budget: ₹{app.budget.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="event">
                <p className="text-center text-muted-foreground">
                  Filter by event applications
                </p>
              </TabsContent>

              <TabsContent value="sponsorship">
                <p className="text-center text-muted-foreground">
                  Filter by sponsorship applications
                </p>
              </TabsContent>

              <TabsContent value="budget">
                <p className="text-center text-muted-foreground">
                  Filter by budget requests
                </p>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Applications;
