"use client";
import React from "react";
import "./styles.css";
function Button({ children }) {
  const [cens, setCens] = React.useState("censored");
  return (
    <button
      className={`${cens}`}
      onClick={() => (cens === "" ? setCens("censored") : setCens(""))}
    >
      {children}
    </button>
  );
}

export default Button;
