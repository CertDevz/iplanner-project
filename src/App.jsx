import Solution from "./view/components/Solution";
import Contact from "./view/components/contact";
import Footer from "./view/components/footer";
import Header from "./view/components/header";
import Home from "./view/components/home";
import Vision from "./view/components/vision";
import Introduction from "./view/components/introduction";
import Iplanner from "./view/components/iplanner";
import "./view/scrollbar.css";
import Impact from "./view/components/impact";
import Events from "./view/components/events";
import EventsFree from "./view/components/events-free";
import Tables from "./view/components/tables";
import CarouselCourses from "./view/components/courses";
import ParaQuem from "./view/components/para-quem";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col ">
        <Iplanner />
        <Home />
      </div>
      <Vision />
      <Impact />
      <Introduction />
      <Solution />
      <ParaQuem />
      <Events />
      <EventsFree />
      <Tables />
      <CarouselCourses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
