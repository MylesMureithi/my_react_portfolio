import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const samePage = prevPathname.current === pathname;
    prevPathname.current = pathname;

    if (hash) return; // let HashLink handle "/#message"

    window.scrollTo({
      top: 0,
      behavior: samePage ? "smooth" : "auto",
    });
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;