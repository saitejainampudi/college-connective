
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions and get assistance
            </p>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I submit a complaint?</AccordionTrigger>
                <AccordionContent>
                  Navigate to the Complaints section and click on "Submit New Complaint". You can choose to submit anonymously or with your name.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I book a facility?</AccordionTrigger>
                <AccordionContent>
                  Go to the Facilities section, select the facility you want to book, choose your preferred time slot, and submit your request.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Administration</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-muted-foreground">Contact form coming soon</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Help;
