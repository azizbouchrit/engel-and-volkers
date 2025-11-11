import AppLogo from "../assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={AppLogo} alt="ENGEL&Völkers Logo" className={styles.logo} />
    </nav>
  );
};

export default Navbar;
