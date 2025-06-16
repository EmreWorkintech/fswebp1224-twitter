import React from "react";
import { navigationItems } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavMenu() {
  return (
    <nav className="text-2xl flex-1">
      {navigationItems.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="block my-4 flex gap-4 hover:text-blue-400"
        >
          <div className="w-10 text-center">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}

export default NavMenu;
