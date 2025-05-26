import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>PLAN YOUR HOLIDAYS</p>
      <section>
        <div className="redes_footer">

          <div>
            <a
              href="https://www.getyourguide.com?partner_id=QQKSFZJ&cmp=share_to_earn"
              target="_blank"
              rel="noopener noreferrer" // Added rel attribute
              height="20px"
              width="20px"
              alt="GetYourGuide" // Changed alt text
            >
              <img
                className="red"
                align="center"
                src="/email.png"
                alt="GetYourGuide" // Changed alt text
                height="20px"
                width="20px"
              ></img>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
