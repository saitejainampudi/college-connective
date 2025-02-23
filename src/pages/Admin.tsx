
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
            <p className="text-lg text-muted-foreground">
              Manage college operations and monitor system usage
            </p>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Manage Elections</h3>
                <p className="text-sm text-muted-foreground">Add candidates and monitor voting</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Moderate Complaints</h3>
                <p className="text-sm text-muted-foreground">Review and approve complaints</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Budget Oversight</h3>
                <p className="text-sm text-muted-foreground">Verify expenses and proofs</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Admin;
