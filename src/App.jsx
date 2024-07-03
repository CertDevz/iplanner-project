import Contact from "./view/components/contact";
import Footer from "./view/components/footer";
import Header from "./view/components/header";
import Home from "./view/components/home";
import "./view/scrollbar.css";

import Tables from "./view/components/tables";
import CarouselCourses from "./view/components/courses";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollTop from "./view/components/scrollTop";
import Dashboard from "./view/components/dashboard";
import VisionSection from "./view/components/VisionSection";
import ImpactSection from "./view/components/ImpactSection";
import IdeaSection from "./view/components/IdeaSection";
import EventManagementSection from "./view/components/EventManagementSection";
import WhoWeAreSection from "./view/components/WhoWeAreSection";
import EventsCardsSection from "./view/components/events-free";
import Events from "./view/components/EventPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div>
      <Header />
      <div className="flex flex-col ">
        <ScrollTop />
        <Dashboard />
        <Home />
      </div>
      <VisionSection />
      <ImpactSection />
      <IdeaSection />
      <EventManagementSection />
      <WhoWeAreSection />
      <Events />
      <EventsCardsSection />
      <Tables />
      <CarouselCourses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
