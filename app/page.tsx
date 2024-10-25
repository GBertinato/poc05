import ShowText from "./components/showText";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <ShowText />
    </main>
  );
}
