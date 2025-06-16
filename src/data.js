import {
  faBell,
  faBookmark,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faHashtag,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons";

export const navigationItems = [
  {
    title: "Home",
    icon: faHouse,
    link: "/",
  },
  {
    title: "Explore",
    icon: faHashtag,
    link: "/",
  },
  {
    title: "Notifications",
    icon: faBell,
    link: "/",
  },
  {
    title: "Messages",
    icon: faMessage,
    link: "/",
  },
  {
    title: "Bookmarks",
    icon: faBookmark,
    link: "/",
  },
  {
    title: "Lists",
    icon: faList,
    link: "/",
  },
  {
    title: "Profile",
    icon: faUser,
    link: "/",
  },
  {
    title: "More",
    icon: faEllipsis,
    link: "/",
  },
];
