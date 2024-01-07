import React from "react";
import { Home, Users } from "react-feather";
import { MdConnectWithoutContact, MdOutlineCategory, MdPrivacyTip, MdWebStories } from "react-icons/md";
import {DiDatabase} from "react-icons/di"
import { FiMail  } from "react-icons/fi";
import {BsBagCheck, BsInfoCircle} from "react-icons/bs"
import { BiCategory, BiSlider } from "react-icons/bi";
import {FaProjectDiagram} from "react-icons/fa"
import {AiFillQuestionCircle, AiFillRightCircle, AiOutlineBars} from 'react-icons/ai'
import { GrContactInfo, GrDeliver, GrServices } from "react-icons/gr";
import { DeliveryDining } from "@mui/icons-material";
const navigationConfig = [

  {
    id: "our_works",
    title: "Our_Works",
    type: "item",
    icon: <FaProjectDiagram size={20} />,
    navLink: "/OurWorks",
  },
  {
    id: "social_media",
    title: "social_media",
    type: "item",
    icon: <FiMail size={20} />,
    navLink: "/",
  },

  {
    id: "Static_info",
    title: "static_info",
    type: "item",
    icon: <MdWebStories size={20} />,
    navLink: "/Static_info",
  },
  {
    id: "contact_us",
    title: "contact_us",
    type: "item",
    icon: <MdConnectWithoutContact size={20} />,
    navLink: "/contact",
  },
  {
    id: "services",
    title: "services",
    type: "collapse",
    icon: <AiOutlineBars size={20} />,
    children: [
      {
        id: "service1",
        title: "First_And_Second_Service",
        type: "item",
        icon: <AiFillRightCircle size={20} />,
        navLink: "/services/First&Second",
      },

      {
        id: "service3",
        title: "Third_Service",
        type: "item",
        icon: <AiFillRightCircle size={20} />,
        navLink: "/services/Third",
      },

      {
        id: "service5",
        title: "Fourth_Service",
        type: "item",
        icon: <AiFillRightCircle size={20} />,
        navLink: "/services/Fifth",
      },
      {
        id: "service6",
        title: "Fifth_Service",
        type: "item",
        icon: <AiFillRightCircle size={20} />,
        navLink: "/services/Sixth",
      },

    ],
  },

];

export default navigationConfig;
