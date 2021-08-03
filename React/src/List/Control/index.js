import React, { useState, useEffect } from "react";

const styles = {
  form: {
    width: "fit-content",
    margin: "0 auto",
    textAlign: "right",
  },
  label: {
    display: "block",
  },
};

export default function Control({ onChange, categories }) {
  // useEffect(() => {
  //   onChange({ one, two, three, four });
  // }, [one, two, three, four]);

  const handleChange = (e) => {
    const elements = e.currentTarget.elements;
    const elementsKeys = Object.keys(elements).filter((key) =>
      Number.isNaN(key - 0)
    );

    const result = {};

    elementsKeys.forEach((key) => {
      result[key] = elements[key].checked;
    });
    onChange(result);
  };

  return (
    <form style={styles.form} onChange={handleChange}>
      {categories.map((category) => (
        <label style={styles.label} key={category}>
          {category}
          <input type="checkbox" name={category} />
        </label>
      ))}

      {/* <label>
        One
        <input
          type="checkbox"
          name="one"
          checked={one}
          onChange={(e) => setOne(e.target.checked)}
        />
      </label>
      <label>
        Two
        <input
          type="checkbox"
          name="two"
          checked={two}
          onChange={(e) => setTwo(e.target.checked)}
        />
      </label>
      <label>
        Three
        <input
          type="checkbox"
          name="three"
          checked={three}
          onChange={(e) => setThree(e.target.checked)}
        />
      </label>
      <label>
        Four
        <input
          type="checkbox"
          name="four"
          checked={four}
          onChange={(e) => setFour(e.target.checked)}
        />
      </label> */}
    </form>
  );
}
