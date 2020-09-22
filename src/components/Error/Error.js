import React from "react";
import styles from "./Error";

const Error = () => {
  return (
    <div className={styles.error}>
      <p className={styles.text}>Something gone wrong!</p>
      <p className={styles.text}>Reload page and try again!</p>
    </div>
  );
};

export default Error;
