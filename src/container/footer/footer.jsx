import { Link } from "react-router-dom";

import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>
              <span>m</span>ental Harmony
            </h4>
            <p className="footer-paragraph">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <div className="copyrights">
              ©MentalHarmony 2022. All rights reserved
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Testimonials</Link>
              </li>
              <li>
                <Link to="">Find a doctor</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li>
                <Link to="">Help Center</Link>
              </li>
              <li>
                <Link to="">Contact Support</Link>
              </li>
              <li>
                <Link to="">Instructions</Link>
              </li>
              <li>
                <Link to=""></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
