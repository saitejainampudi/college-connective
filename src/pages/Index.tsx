
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { QuickAccess } from "@/components/dashboard/QuickAccess";

const Index = () => {
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
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-muted-foreground">No updates yet</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
