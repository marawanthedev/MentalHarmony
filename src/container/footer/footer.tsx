import { Link } from "react-router-dom";

import "./footer.scss";
const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>
              <span>m</span>ental Harmony
            </h4>
            <p className="footer-paragraph">
              A platform to provide a healty learning envirnoment for student to
              unleash their full potential and be our future leaders.
            </p>
            <div className="copyrights">
              ©MentalHarmony 2022. All rights reserved
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="">Browse Service Providers</Link>
              </li>
              {/* <li>
                <Link to="">Testimonials</Link>
              </li>
              <li>
                <Link to="">Find a doctor</Link>
              </li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              {/* <li>
                <Link to="">Instructions</Link>
              </li> */}
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
