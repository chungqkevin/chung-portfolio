import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollPos(true);
      } else {
        setScrollPos(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]); // Include scrollPos in the dependency array

  return { scrollPos };
};
