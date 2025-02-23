
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Progress } from "@/components/ui/progress";

const Budget = () => {
  const departmentBudgets = [
    {
      department: "Computer Science",
      allocated: 500000,
      spent: 320000,
      items: ["Lab Equipment", "Software Licenses", "Research Grants"]
    },
    {
      department: "Physics",
      allocated: 400000,
      spent: 250000,
      items: ["Lab Apparatus", "Research Materials", "Conference Funding"]
    },
    {
      department: "Student Activities",
      allocated: 300000,
      spent: 180000,
      items: ["Cultural Events", "Sports Equipment", "Club Activities"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Budget Management</h1>
            <p className="text-lg text-muted-foreground">
              Track and manage department budgets
            </p>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Department Budgets</h2>
            <div className="space-y-6">
              {departmentBudgets.map((dept, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{dept.department}</h3>
                      <p className="text-sm text-muted-foreground">
                        Budget: ₹{dept.allocated.toLocaleString()}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Spent: ₹{dept.spent.toLocaleString()}
                    </span>
                  </div>
                  <Progress 
                    value={(dept.spent / dept.allocated) * 100} 
                    className="mb-2"
                  />
                  <div className="flex gap-2 flex-wrap mt-2">
                    {dept.items.map((item, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold">Lab Equipment Purchase</h3>
                <p className="text-sm text-muted-foreground">Amount: ₹50,000</p>
                <span className="text-xs text-muted-foreground">Feb 20, 2024</span>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold">Annual Sports Meet</h3>
                <p className="text-sm text-muted-foreground">Amount: ₹75,000</p>
                <span className="text-xs text-muted-foreground">Feb 15, 2024</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Budget;
