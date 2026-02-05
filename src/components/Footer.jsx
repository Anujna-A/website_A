// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="py-6 px-4"
//       style={{
//         background: "hsl(var(--muted) / .4)",
//         borderTop: "1px solid hsl(var(--border))",
//       }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10">

//         {/* Visistata (SMALL) */}
//          {/* Brand */}
//         <div className="flex-1 min-w-[200px]">
//           <h3
//             className="text-xl font-semibold space-grotesk cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             Visistata
//           </h3>
//           <p className="text-sm mt-3 text-muted-foreground">
//             Visistata offers expert-led courses in software development and
//             testing to help you land your next role in tech.
//           </p>
//         </div>
//         {/* <div className="w-[220px] shrink-0">
//           <span
//             className="text-lg font-semibold space-grotesk cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             Visistata
//           </span>
//           <p className="text-sm mt-2 text-muted-foreground">
//             Visistata offers expert-led<br />
//              courses in software development<br />
//             and testing to help you land<br />
//              your next role in tech.
//           </p>
//         </div> */}

//         {/* Courses */}
//         <div className="min-w-[140px]">
//           <h4 className="font-semibold space-grotesk">Courses</h4>
//           <p className="text-sm my-1 text-muted-foreground">Web Development</p>
//           <p className="text-sm my-1 text-muted-foreground">MERN Full Stack</p>
//           <p className="text-sm my-1 text-muted-foreground">Python Full Stack</p>
//           <p className="text-sm my-1 text-muted-foreground">IOT & Smart Systems</p>
//           <p className="text-sm my-1 text-muted-foreground">Drone Technology</p>
//           <p className="text-sm my-1 text-muted-foreground">Career Development</p>
//         </div>

//         {/* Product */}
//         <div className="min-w-[140px]">
//           <h4 className="font-semibold space-grotesk">Product</h4>
//           <p className="text-sm my-1 text-muted-foreground">Artificial Intelligence</p>
//           <p className="text-sm my-1 text-muted-foreground">Cyber Security</p>
//           <p className="text-sm my-1 text-muted-foreground">SaaS</p>
//         </div>

//         {/* Services */}
//         <div className="min-w-[160px]">
//           <h4 className="font-semibold space-grotesk">Training Services</h4>
//           <p className="text-sm my-1 text-muted-foreground">College Training</p>
//           <p className="text-sm my-1 text-muted-foreground">Corporate Training</p>
//           <p className="text-sm my-1 text-muted-foreground">Internship & Projects</p>
//           <p className="text-sm my-1 text-muted-foreground">Individual Training</p>
//           <p className="text-sm my-1 text-muted-foreground">Hire from Us</p>
//         </div>

//         {/* Consulting */}
//         <div className="min-w-[180px]">
//           <h4 className="font-semibold space-grotesk">Consulting Services</h4>
//           <p className="text-sm my-1 text-muted-foreground">Technical Services </p>
//           <p className="text-sm my-1 text-muted-foreground">Management Services</p>
//           <p className="text-sm my-1 text-muted-foreground">Placement Services</p>
//           <p className="text-sm my-1 text-muted-foreground">Legal Services</p>
//           <p className="text-sm my-1 text-muted-foreground">GCC/ Startup Mentorship</p>
//         </div>

//         {/* Company */}
//         <div className="min-w-[140px]">
//           <h4 className="font-semibold space-grotesk">Company</h4>
//           <p className="text-sm my-1 text-muted-foreground">About Us</p>
//           <p className="text-sm my-1 text-muted-foreground">Contact Us</p>
//           <p className="text-sm my-1 text-muted-foreground">Blog</p>
//           <p className="text-sm my-1 text-muted-foreground">Terms of Services</p>
//           <p className="text-sm my-1 text-muted-foreground">Privacy Policy</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Footer;

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="py-8 px-6 text-gray-800"
      style={{
        background: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10">

        {/* Brand */}
        <div className="flex-1 min-w-[200px]">
          <h3
            className="text-xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Visistata
          </h3>
          <p className="text-sm mt-3 text-gray-600">
            Visistata offers expert-led courses in software development and
            testing to help you land your next role in tech.
          </p>
        </div>

        {/* Courses */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Courses</h4>
          <p>Web Development</p>
          <p>MERN Full Stack</p>
          <p>Python Full Stack</p>
          <p>IOT & Smart Systems</p>
          <p>Drone Technology</p>
          <p>Career Development</p>
        </div>

        {/* Product */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Products</h4>
          <p>Artificial Intelligence</p>
          <p>Cyber Security</p>
          <p>SaaS</p>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Training Services</h4>
          <p>College Training</p>
          <p>Corporate Training</p>
          <p>Internships & Projects</p>
          <p>Individual Training</p>
          <p>Hire from Us</p>
        </div>

        {/* Consulting */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="font-semibold mb-2">Consulting Services</h4>
          <p>Technical Services</p>
          <p>Management Services</p>
          <p>Placement Services</p>
          <p>Legal Services</p>
          <p>GCC / Startup Mentorship</p>
        </div>

        {/* Company */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Company</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Blog</p>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;