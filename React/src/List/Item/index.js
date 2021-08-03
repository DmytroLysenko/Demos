import React from "react";

import styles from "./item.module.css";

export default function ListItem({item}) {
  return (
    <div className={styles.container}>
      <p>{item.name}</p>
    </div>
  );
}
