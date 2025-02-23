
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

const Elections = () => {
  const activeElections = [
    {
      id: 1,
      title: "Student Council President 2024",
      endDate: "2024-03-15",
      candidates: [
        { id: 1, name: "Alice Johnson", votes: 145, manifesto: "Building a better campus" },
        { id: 2, name: "Bob Smith", votes: 132, manifesto: "Innovation in education" },
        { id: 3, name: "Carol White", votes: 98, manifesto: "Student welfare first" },
      ]
    },
    {
      id: 2,
      title: "Department Representative",
      endDate: "2024-03-20",
      candidates: [
        { id: 4, name: "David Brown", votes: 56, manifesto: "CS department growth" },
        { id: 5, name: "Eva Martinez", votes: 78, manifesto: "Tech innovation" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Elections</h1>
            <p className="text-lg text-muted-foreground">
              View and participate in ongoing elections
            </p>
          </section>

          {activeElections.map((election) => (
            <section key={election.id} className="glass-card rounded-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">{election.title}</h2>
                  <p className="text-muted-foreground">Ends on {election.endDate}</p>
                </div>
                <Button>Cast Vote</Button>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {election.candidates.map((candidate) => (
                  <div key={candidate.id} className="p-4 bg-white/5 rounded-lg space-y-2">
                    <h3 className="font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground">{candidate.manifesto}</p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm">Current Votes: {candidate.votes}</span>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Past Elections</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold">Student Council Elections 2023</h3>
                <p className="text-sm text-muted-foreground">Winner: Michael Chang</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold">Sports Secretary Elections 2023</h3>
                <p className="text-sm text-muted-foreground">Winner: Sarah Wilson</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Elections;
