import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // "smooth" pentru derulare lină, "auto" pentru instant
    });
  }, [pathname]);

  return null;
}
