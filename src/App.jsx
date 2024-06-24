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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
