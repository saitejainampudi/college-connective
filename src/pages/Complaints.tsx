
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Complaints = () => {
  const complaints = [
    {
      id: 1,
      title: "Cafeteria Food Quality",
      description: "The food quality has declined significantly",
      status: "Under Review",
      date: "2024-02-20",
      anonymous: true,
    },
    {
      id: 2,
      title: "Library Hours Extension",
      description: "Request to extend library hours during exams",
      status: "Approved",
      date: "2024-02-18",
      anonymous: false,
      author: "John Doe",
    },
    {
      id: 3,
      title: "Sports Equipment",
      description: "Need new equipment for basketball court",
      status: "Resolved",
      date: "2024-02-15",
      anonymous: false,
      author: "Jane Smith",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Complaints</h1>
            <p className="text-lg text-muted-foreground">
              Submit and track your complaints
            </p>
            <Button className="mt-6">Submit New Complaint</Button>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Recent Complaints</h2>
            <div className="space-y-4">
              {complaints.map((complaint) => (
                <div key={complaint.id} className="p-4 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{complaint.title}</h3>
                    <Badge variant={
                      complaint.status === "Approved" ? "default" :
                      complaint.status === "Resolved" ? "secondary" : "outline"
                    }>
                      {complaint.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{complaint.description}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Filed on {complaint.date}</span>
                    <span>{complaint.anonymous ? "Anonymous" : `By ${complaint.author}`}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Resolved Issues</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold">Wi-Fi Connectivity</h3>
                <p className="text-sm text-muted-foreground">Network infrastructure upgraded</p>
                <span className="text-xs text-muted-foreground">Resolved on Feb 10, 2024</span>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold">Classroom Projectors</h3>
                <p className="text-sm text-muted-foreground">New projectors installed</p>
                <span className="text-xs text-muted-foreground">Resolved on Feb 5, 2024</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Complaints;
