import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function UserPanel() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex gap-2 items-center">
      <img src={user.image} className="rounded-full w-12" />
      <div className="flex-1">
        {user.firstName + " " + user.lastName}
        <br />@{user.username}
      </div>
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
  );
}

export default UserPanel;
