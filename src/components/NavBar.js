import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const jsxLinks = links.map((link)=> {
    // let href = link;
    return <a key = {link} href={"#"+link}>{link}</a>
  }
  )
  // console.log(jsxLinks);

  return <nav>
    {jsxLinks}
  </nav>;
}

export default NavBar;
