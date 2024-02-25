import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Desenvolvido por André Luiz Lima</span>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.linkedin.com/in/andré-luiz-818360217/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/andreluizlimaa" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>&copy; 2023 Copyright all right reserved</p>
    </footer>
  );
}

export default Footer;
