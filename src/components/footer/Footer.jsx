import React, {useContext} from 'react';
import './footer.css';
import { ThemeContext } from '../../contexts/ThemContext';

function Footer() {

  const {isDarkMode} = useContext(ThemeContext);

  return (
    <footer >
      <div className={`container-fluid mt-5 pt-2 ${isDarkMode? 'bg-black colorTextFooter' : 'footer'}`}>
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna ut enim ultricies varius.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <address>
              <p>123 Main Street</p>
              <p>City, State, ZIP</p>
              <p>Email: info@example.com</p>
              <p>Phone: 123-456-7890</p>
            </address>
          </div>
        </div>
      </div>
      <div className={`bottom-bar ${isDarkMode? 'bg-black colorTextFooter' : 'footer'}`}>
        <div className="container">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
