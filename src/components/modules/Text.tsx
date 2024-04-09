import React from "react";
import styles from "./text.module.css";

const Text = () => {
  return (
    <div>
      <label>
        <span> title </span>
        <input type="checkbox" className="peer hidden" id="title1" />
        </label>
        <div className="hidden peer-checked:block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            debitis iusto quos corrupti optio asperiores similique, at nobis
            saepe est!
          </p>
        </div>
      
      <label>
        <span> title2 </span>
        <input type="checkbox" className="peer hidden"  />

        <div className="hidden peer-checked:block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            debitis iusto quos corrupti optio asperiores similique, at nobis
            saepe est!
          </p>
        </div>
      </label>
    </div>
  );
};

export default Text;
