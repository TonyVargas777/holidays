import React, { useState, useEffect } from "react";

const BotonSubir = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Muestra el botón cuando el usuario hace scroll hacia abajo
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="botonSubir" onClick={handleScrollToTop}>
      <span>⬆️</span>
    </div>
  );
};

export default BotonSubir;
