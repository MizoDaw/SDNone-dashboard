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
  // {
  //   id: "home",
  //   title: "home",
  //   type: "item",
  //   icon: <Home size={20} />,
  //   navLink: "/",
  // },

    
  {
    id: "categories",
    title: "categories",
    type: "item",
    icon: <BiCategory size={20} />,
    navLink: "/categories",
  },
  // {
  //   id: "subcategories",
  //   title: "subcategories",
  //   type: "item",
  //   icon: <MdOutlineCategory size={20} />,
  //   navLink: "/subcategories",
  // },
  // {
  //   id: "subsubcategories",
  //   title: "subsubcategories",
  //   type: "item",
  //   icon: <MdOutlineCategory size={20} />,
  //   navLink: "/subsubcategories",
  // },
  // {
  //   id: "products",
  //   title: "products",
  //   type: "item",
  //   icon: <BsBagCheck size={20} />,
  //   navLink: "/add_page",
  // },
  // {
  //   id: "orders",
  //   title: "orders",
  //   type: "item",
  //   icon: <DiDatabase size={20} />,
  //   navLink: "/orders",
  // },
  {
    id: "slider",
    title: "slider",
    type: "item",
    icon: <BiSlider size={20} />,
    navLink: "/slider",
  },
  {
    id: "products",
    title: "products",
    type: "item",
    icon: <BsBagCheck size={20} />,
    navLink: "/products",
  },
  {
    id: "orders",
    title: "orders",
    type: "item",
    icon: <DiDatabase size={20} />,
    navLink: "/orders",
  },
  // {
  //   id: "slider",
  //   title: "slider",
  //   type: "item",
  //   icon: <BiSlider size={20} />,
  //   navLink: "/slider",
  // },
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
 
  // {
  //   id: "users",
  //   title: "users",
  //   type: "item",
  //   icon: <Users size={20} />,
  //   navLink: "/users",
  // },
  // {
  //   id: "delivery_fee",
  //   title: "delivery_fee",
  //   type: "item",
  //   icon: <GrDeliver size={20} />,
  //   navLink: "/delivery_fee",
  // },
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
        id: "service4",
        title: "Fourth_Service",
        type: "item",
        icon: <AiFillRightCircle size={20} />,
        navLink: "/services/Fourth",
      },
      {
        id: "service5",
        title: "Fifth_Service",
        type: "item",
        icon: <AiFillRightCircle size={20} />,
        navLink: "/services/Fifth",
      },
      {
        id: "service6",
        title: "Sixth_Service",
        type: "item",
        icon: <AiFillRightCircle size={20} />,
        navLink: "/services/Sixth",
      },

    ],
  },
  // {
  //   id: "accounts",
  //   title: "accounts",
  //   type: "collapse",
  //   icon: <AdminPanelSettingsIcon />,
   
  //   children: [
  //     {
  //       id: "view_accounts",
  //       title: "view_accounts",
  //       type: "item",
  //       icon: <PeopleIcon />,
  //       navLink: "/accounts/view",
       
  //     },
  //     {
  //       id: "add_account",
  //       title: "add_account",
  //       type: "item",
  //       icon: <PersonAddIcon />,
  //       navLink: "/accounts/add",
       
  //     },
  //     {
  //       id: "role",
  //       title: "role",
  //       type: "item",
  //       icon: <BiLockAlt />,
  //       navLink: "/accounts/role",
       
  //     },
  //   ],
  // },


];

export default navigationConfig;
