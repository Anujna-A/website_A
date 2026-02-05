import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

import { StyledMenubar } from "./styled-components";
import logo1 from "../assets/visistata_logo.png";
import { downloadBrochure } from "./utils";

const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    { label: "Home", command: () => navigate("/") },
    { label: "Courses", command: () => navigate("/courses") },
    {
      label: "Products",
      items: [
        { label: "Artificial Intelligence" },
        { label: "Cyber Security" },
        { label: "SaaS" },
      ],
    },
    { label: "Training Services", command: () => navigate("/training-services") },
    {
      label: "Consulting Services",
      items: [
        { label: "Technical Services",
          items:[
           {
              label: "Artifical Intelligence"
              // command: () => navigate("/product"),
            },
            {
              label: "Cyber Security"
              // command: () => navigate("/product"),
            },
            {
              label: "IOT"
              // command: () => navigate("/product"),
            },
            {
              label: "Embedded"
              // command: () => navigate("/product"),
            },
            {
              label: "Data Science"
              // command: () => navigate("/product"),
            },
            {
              label: "Cloud Computing"
              // command: () => navigate("/product"),
            },
            {
              label: "SaaS"
              // command: () => navigate("/product"),
            },
          ]
        },
        { label: "Management Services" },
        { label: "Placement Services" },
        { label: "Legal Services" },
        { label: "GCC / Startup Mentorship" },
      ],
    },
    { label: "Contact", command: () => navigate("/contact") },
    {
      label: "Download Brochure",
      items: [
        {
          label: "MERN Full Stack",
          command: () =>
            downloadBrochure(
              "/brochures/mern-full-stack.xlsx",
              "MERN-Full-Stack-Brochure.xlsx"
            ),
        },
        {
          label: "Python Full Stack",
          command: () =>
            downloadBrochure(
              "/brochures/python-full-stack.xlsx",
              "Python-Full-Stack-Brochure.xlsx"
            ),
        },
      ],
    },
    { label: "About Us", command: () => navigate("/about") },
  ];

  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <Link to="/" className="logo-link">
        <img src={logo1} height={48} alt="Visistata Logo" />
      </Link>

      {/* CENTER: Brand */}
      <span className="brand-name" onClick={() => navigate("/")}>
        Visistata
      </span>

      {/* RIGHT: Menu */}
      <StyledMenubar model={items} />
    </nav>
  );
};

export default Navbar;