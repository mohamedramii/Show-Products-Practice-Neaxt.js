import MainNavigate from "./MainNavigate";
import styles from "./Layout.module.css";

const layout = (props) => {
  return (
    <div>
      <MainNavigate />
      <main className={styles.main}> {props.children} </main>
    </div>
  );
};

export default layout;
