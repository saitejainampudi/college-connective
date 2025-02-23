
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const userProfile = {
    name: "Alex Johnson",
    studentId: "2024CS001",
    email: "alex.j@college.edu",
    department: "Computer Science",
    year: "3rd Year",
    activities: [
      { action: "Submitted Application", date: "2024-02-20" },
      { action: "Cast Vote in Election", date: "2024-02-15" },
      { action: "Booked Facility", date: "2024-02-10" }
    ]
  };

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
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-semibold">{userProfile.name}</h2>
                <p className="text-muted-foreground">{userProfile.studentId}</p>
              </div>
              <Button>Edit Profile</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Email: </span>
                      {userProfile.email}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Department: </span>
                      {userProfile.department}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Year: </span>
                      {userProfile.year}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg text-center">
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground">Applications</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg text-center">
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-sm text-muted-foreground">Bookings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Recent Activity</h3>
                <div className="space-y-4">
                  {userProfile.activities.map((activity, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                      <p className="text-sm">{activity.action}</p>
                      <span className="text-xs text-muted-foreground">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
