import React, { Fragment, useState } from "react";

import Item from "./Item";
import Control from "./Control";

import styles from "./list.module.css";

export default function List({ list }) {
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = (status) => {
    const result = [];
    list.forEach((item) => {
      if (status[item.name] === true) {
        result.push(item);
      }
    });
    setFilteredList(result);
  };
  return (
    <Fragment>
      <Control onChange={handleChange} />
      <ul className={styles.list}>
        {filteredList.map((item) => (
          <li key={item.id} className={styles.item}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
