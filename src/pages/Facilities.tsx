
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      name: "Main Auditorium",
      capacity: 500,
      status: "Available",
      nextAvailable: "Today, 2:00 PM",
      amenities: ["Stage", "Sound System", "Projector"]
    },
    {
      id: 2,
      name: "Sports Complex",
      capacity: 200,
      status: "Booked",
      nextAvailable: "Tomorrow, 9:00 AM",
      amenities: ["Indoor Courts", "Gym", "Changing Rooms"]
    },
    {
      id: 3,
      name: "Conference Room A",
      capacity: 50,
      status: "Available",
      nextAvailable: "Today, 3:00 PM",
      amenities: ["Video Conferencing", "Whiteboard", "Air Conditioning"]
    }
  ];

  const bookings = [
    {
      id: 1,
      facility: "Main Auditorium",
      date: "2024-02-25",
      time: "2:00 PM - 5:00 PM",
      status: "Approved",
      event: "Annual Cultural Fest"
    },
    {
      id: 2,
      facility: "Sports Complex",
      date: "2024-02-26",
      time: "9:00 AM - 11:00 AM",
      status: "Pending",
      event: "Inter-Department Tournament"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="pt-24 px-6 pb-6 ml-0 md:ml-64">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Campus Facilities</h1>
            <p className="text-lg text-muted-foreground">
              Book and manage campus facilities
            </p>
          </section>

          <section className="glass-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Available Facilities</h2>
              <Button>Book a Facility</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {facilities.map((facility) => (
                <div key={facility.id} className="p-4 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{facility.name}</h3>
                    <Badge variant={facility.status === "Available" ? "default" : "secondary"}>
                      {facility.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Capacity: {facility.capacity} people
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Next Available: {facility.nextAvailable}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {facility.amenities.map((amenity, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-white/10">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">My Bookings</h2>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="p-4 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{booking.facility}</h3>
                    <Badge variant={booking.status === "Approved" ? "default" : "outline"}>
                      {booking.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{booking.event}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                    <span>{booking.date}</span>
                    <span>{booking.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Facilities;
