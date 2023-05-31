import React from "react";
import styles from "./styles.module.css";

function ModuleStyleComponent() {
  return (
    <div className={styles.wrapper} id={styles.hi}>
      ModuleStyleComponent
    </div>
  );
}

export default ModuleStyleComponent;
