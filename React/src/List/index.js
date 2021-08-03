import React, { Fragment, useEffect, useState } from "react";

import Item from "./Item";
import Control from "./Control";

import styles from "./list.module.css";

const URL = "https://swapi.dev/api/planets/";

export default function List() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState(list);
  const terrains = list.reduce((acc, item, idx, arr) => {
    const result = [...acc, ...item.terrain.split(",")];

    if (arr.length - 1 === idx) {
      // return [...new Set(result)].sort();
      return result
        .filter((item, idx, arr) => arr.indexOf(item) === idx)
        .sort();
    }

    return result;
  }, []);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => setList([...response.results]));
  }, []);

  const handleChange = (status) => {
    const keysFilter = Object.entries(status)
      .filter((item) => item[1] === true)
      .map((item) => item[0]);
    const result = [];

    list.forEach((item) => {
      keysFilter.forEach((key) => {
        if (item.terrain.includes(key)) {
          result.push(item);
        }
      });
    });

    setFilteredList(
      result.filter((item, idx, arr) => arr.indexOf(item) === idx)
    );
  };

  return (
    list && (
      <Fragment>
        <Control onChange={handleChange} categories={terrains} />
        <ul className={styles.list}>
          {filteredList.map((item, idx) => (
            <li key={idx} className={styles.item}>
              <Item item={item} />
            </li>
          ))}
        </ul>
      </Fragment>
    )
  );
}
