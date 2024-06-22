import { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count is : " + count);

    return () => {
      console.log("cleaned up");
    };
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Hooks;
