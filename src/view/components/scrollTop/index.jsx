import { MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollTop}
        className=" scrollTop fixed bottom-7 right-7 py-2 px-4 bg-purple-950 text-white rounded-md cursor-pointer transition-all hover:bg-purple-700 z-50"
      >
        <MoveUp />
      </div>
    )
  );
}
