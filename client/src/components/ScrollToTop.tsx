import { useEffect } from "react";
import { useLocation } from "wouter";

const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Small delay to ensure the page content has rendered
    const timer = setTimeout(() => {
      // Smooth scroll to top with animation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

export default ScrollToTop; 