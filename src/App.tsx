
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Elections from "./pages/Elections";
import Complaints from "./pages/Complaints";
import Applications from "./pages/Applications";
import Budget from "./pages/Budget";
import Facilities from "./pages/Facilities";
import Profile from "./pages/Profile";
import Health from "./pages/Health";
import Academic from "./pages/Academic";
import Admin from "./pages/Admin";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/health" element={<Health />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
