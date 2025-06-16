import React from "react";
import NavMenu from "./NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import UserPanel from "./UserPanel";

function LeftSide() {
  return (
    <div className="flex flex-col py-8 px-4 items-start">
      <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-5xl" />
      <NavMenu />
      <UserPanel />
    </div>
  );
}

export default LeftSide;
