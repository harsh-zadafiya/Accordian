import React from "react";
import Data from "./Data";
import Myaccordian from "./Myaccordian";

function Accordian() {

  return (
    <>
      <section>
        {Data.map((elem) => {
          return <Myaccordian key={elem.id} {...elem} />;
        })}
      </section>
    </>
  );
}

export default Accordian;