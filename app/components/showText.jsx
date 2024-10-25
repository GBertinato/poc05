"use client";
import styles from "./showText.module.css";
import { useState } from "react";

export default function ShowText() {
  const [visivel, setVisivel] = useState(false); //estado inicial
  const alternar = () => setVisivel(!visivel); //altera o estado

  return (
    <div className={styles.ShowText}>
      <button onClick={alternar} className={styles.botao}>
        {visivel ? "Ocultar Texto" : "Mostrar Texto"}
      </button>

      {visivel && <p className={styles.text}>texto oculto</p>}
    </div>
  );
}
