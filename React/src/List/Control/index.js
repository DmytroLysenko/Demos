import React, { useState, useEffect } from "react";

export default function Control({ onChange }) {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  useEffect(() => {
    onChange({ one, two, three, four });
  }, [one, two, three, four]);

  return (
    <form>
      <label>
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
      </label>
    </form>
  );
}
