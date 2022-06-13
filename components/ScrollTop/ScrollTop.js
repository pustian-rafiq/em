import { useEffect, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrollTop = () => {
  const [scrolltop, setScrolltop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrolltop(true);
      } else {
        setScrolltop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {scrolltop && (
        <button
          style={{
            position: "fixed",
            bottom: "13px",
            right: "77px",
            height: "30px",
            width: "30px",
            cursor: "pointer",
            backgroundColor: "#8b8989b0",
            color: "#f3f3f3",
            border: "0px",
            zIndex: "555",
          }}
          onClick={scrollTop}
        >
          <ExpandLessIcon />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
