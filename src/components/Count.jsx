
import { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    
    let id = setInterval(() => {
      console.log("count");
      setCounter((preValue) => {
        if (preValue <= 0) {
           clearInterval(id);
          return 0;
        }
        return preValue - 1;
      });
    }, 1000);
    // clearInterval(id);
  }, []);
  return (
    <div>
      <h1> Count : {counter}</h1>
    </div>
  );
};
