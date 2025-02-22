
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Profile</h1>
            <p className="text-lg text-muted-foreground">
              Manage your account settings
            </p>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-muted-foreground">Profile details coming soon</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
