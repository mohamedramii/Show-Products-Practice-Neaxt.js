import styles from "./MainNavigate.module.css";
import Link from "next/link";
const MainNavigate = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">products</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/new-product">add new product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigate
