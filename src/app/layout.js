import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {new Date().toString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
