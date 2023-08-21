import Logo from '../../assets/logo.svg'
import styles from './header.module.css'

export function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="ToDo" />
    </div>
  );
}

export default Header;