import Footer from "../components/Footer";
import {
  StyledColoredDiv,
  StyledPrimaryButton,
} from "../components/styled-components";
import "../styles/services.css";
import courseImg from "../assets/courses.webp";

const CourseConfigData = [
  {
    image: courseImg,
    tag: "Web Development",
    title: "JavaScript for Beginners",
    description:
      "Master the fundamentals of JavaScript, the language of the web.",
  },
  {
    image: courseImg,
    tag: "Web Development",
    title: "Advanced React & State Management",
    description:
      "Deep dive into React, hooks, context, and modern state management libraries.",
  },
  {
    image: courseImg,
    tag: "Python Full Stack",
    title: "Python Full Stack Development",
    description:
      "Build robust and scalable web applications using Python with Django.",
  },
  {
    image: courseImg,
    tag: "Manual Testing",
    title: "QA Fundamentals & Theory",
    description:
      "Learn the core principles of software quality assurance and testing.",
  },
  {
    image: courseImg,
    tag: "Automation Testing",
    title: "Selenium WebDriver Mastery",
    description:
      "Automate web browser testing with the industry-standard Selenium.",
  },
  {
    image: courseImg,
    tag: "Web Development",
    title: "MERN Full Stack Development",
    description:
      "Master the MERN stack (MongoDB, Express, React, Node.js) to build modern web applications.",
  },
];
const Courses = () => {
  return (
    <div>
      <div className="py-4 px-4">
        <div className="mb-6">
          <h1 className="text-6xl space-grotesk text-center	card">
            Course Catalog
          </h1>
          <p className="mb-3 text-muted-foreground text-center	">
            Explore our expert-led courses and find the perfect one to advance
            your IT career.
          </p>
        </div>

        <div className="grid p-4">
          {CourseConfigData.map((service, index) => (
            <div key={index} className="md:col-6 lg:col-4">
              <StyledColoredDiv className="border-1 h-full radius">
                {/* img */}
                <img src={service.image} alt="" srcset="" width={"100%"} />
                <div className="p-4 ">
                  <div className="text-xl font-semibold space-grotesk tracking-tight pb-4">
                    {service.title}
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  <StyledPrimaryButton
                    className="w-full mt-3"
                    label="View Details"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                  />
                </div>
              </StyledColoredDiv>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Courses;
