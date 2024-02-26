import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <div>
          <a href="#" className="footer-heading">
            Categories
          </a>
          <a href="#" className="footer-links">
            Web Builder
          </a>
          <a href="#" className="footer-links">
            Hosting
          </a>
          <a href="#" className="footer-links">
            Data Center
          </a>
          <a href="#" className="footer-links">
            Robotic-Automation
          </a>
        </div>
        <div>
          <a href="#" className="footer-heading">
            Contact
          </a>
          <a href="#" className="footer-links">
            Contact
          </a>
          <a href="#" className="footer-links">
            Privacy Policy
          </a>
          <a href="#" className="footer-links">
            Terms Of Service
          </a>
          <a href="#" className="footer-links">
            Categories
          </a>
          <a href="#" className="footer-links">
            About
          </a>
        </div>
        <div>
          <select className="footer-select">
            <option>United States</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
