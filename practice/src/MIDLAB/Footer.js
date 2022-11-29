import './footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (  

        <div>
      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">Blood Donation System</h1>

          <h2>Contact</h2>

          <address>
            03438903889  Address Mansehra
            <br />
            <a class="footer__btn" href="asherkhanswati@gmail.com">
              Email Us:


              
              AsherKhanSwati@gmail.com
            </a>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Online Donor</a>
              </li>

              <li>
                <a href="#">Print Registration Form</a>
              </li>

              <li>
                <a href="#">Blood ads</a>
              </li>
            </ul>
          </li>

          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Technology</h2>

            <ul class="nav__ul nav__ul--extra">
              <li>
              <Link to="./tropy">
                <a href="#">"/qea Trophy</a>
                </Link>
              </li>

              <li>
              <Link to="app">
                <a href="#">"/iodApp"</a>
                </Link>
              </li>

              <li>
                <a href="#">Digital Signage</a>
              </li>

              <li>
                <a href="#">Blood Donor Identification</a>
              </li>

              <li>
                <a href="#">blood Banks</a>
              </li>

              <li>
                <a href="#">ID</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title"></h2>

            <ul class="nav__ul">
              <li>
                <a href="#"> </a>
              </li>

              <li>
                <a href="#"></a>
              </li>

              <li>
                <a href="#"></a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
        

          <div class="legal__links">
            <span>
              Made with <span class="heart">♥</span> remotely from Anywhere
            </span>
          </div>
        </div>
      </footer>
    </div>
    );
}

export default Footer;