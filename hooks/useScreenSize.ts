import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setScreenWidth(innerWidth);
      if (innerWidth < 600) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    };

    // Initial variant calculation on component mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobileScreen,
    screenWidth
  }
}
