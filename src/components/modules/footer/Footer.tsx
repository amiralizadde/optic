import React from "react";
import styles from "./footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__content}>
        <div>
          <div>logo</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            neque quam harum tenetur corrupti repudiandae ipsam fuga cupiditate
            vel corporis sit officiis esse impedit, accusamus molestiae
            perferendis deleniti voluptatum cum.
          </p>
        </div>
        <div>
          <div className="font-bold">Products</div>
          <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
          </ul>
        </div>
        <div className={styles.contact__content}>
          <div className="font-bold ps-0">Contact</div>
          <p>
            <FaPhoneAlt className="font-bold" />
            <span> 09121587541 </span>
          </p>
          <p>
            <MdEmail className="font-bold" />
            <span> componyemail@gmail.com </span>
          </p>
          <p>
            <FaLocationDot className="font-bold " />
            <span> adress companey </span>
          </p>
          <div className={styles.socialApp__content}>
            <FaInstagram className="text-red-500 " />
            <IoLogoLinkedin className="text-blue-800" />
            <FaTelegram className="text-blue-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
