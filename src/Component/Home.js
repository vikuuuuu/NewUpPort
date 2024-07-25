import "./Home.css";
import Image from "../Images/1.jpg";
import Svelteicon from "../Images/svelte-icon.svg";
// import SvelteStrapicon from "../Images/sveltestrap-icon.png";
// import Canvaicon from "../Images/canva-icon.jpg";
// import SocialIcon from "../Images/socialMedia.png";
import RouterIcon from "../Images/Router-Iocn.png";
import SwitchIcon from "../Images/SwitchIcon.png";
import AccessPointIcon from "../Images/AccessPoint.png";
import Point2Iocn from "../Images/Point2Icon.jpg";
// import WLCIcon from "../Images/WLCRouter.png";
// import WinServer from "../Images/WinServer.png";
import CompAss from "../Images/CompAss.png";
// import Troubleshooting from "../Images/Troubleshooting.png";
// import OSInstall from "../Images/OSInstall.png";
// import Arduino from "../Images/ArdunioIcon.png";
// import IoT from "../Images/IotIcon.png";

import APWebsite from "../Images/ap website.png";
import APDashboard from "../Images/AP Dashboard.jpeg";
import OnlineExam from "../Images/onlineExam.png";
import MyPort from "../Images/myport.png";

import React, { useEffect, useRef, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container" data-aos="fade-down">
      <Slider {...settings}>
        <div className="project-slide">
          <img src={OnlineExam} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">Online Exam Dashboard</h1>
          <p className="visit-website">Visit :- Not Available</p>
          <p className="project-details">
            I am Developing an online Examination Dashboard using Svelte js,
            aiming for an intuitive user experience and real-time updates. The
            Project is still in progress and not yet completed.
          </p>
        </div>
        <div className="project-slide">
          <img src={APWebsite} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">ApnaBackup Website</h1>
          <p className="visit-website">
            Visit :- <a href="https://apnabackup.com">ApnaBackup Website</a>
          </p>
          <p className="project-details">
            I am Creating a project in React JS for a Software Website named
            ApnaBackup. This Project aims to provide a comprehensive solution
            for data backup and recovery.
          </p>
        </div>
        <div className="project-slide">
          <img src={APDashboard} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">ApnaBackup Dashboard</h1>
          <p className="visit-website">Visit :- Not Available</p>
          <p className="project-details">
            ApnaBackup Website is a business-oriented backup Software that
            offers real-time data protection and secure cloud storage. The
            Project is still in progress and not yet completed.
          </p>
        </div>

        <div className="project-slide">
          <img src={MyPort} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">My Portfolio</h1>
          <p className="visit-website">
            Visit :- <a href="/">Personal Portfolio</a>
          </p>
          <p className="project-details">
            I Create a project in React Js for my Personal Portfolio. This
            project will showcase my skills, project and experience in front-end
            Development.
          </p>
        </div>
      </Slider>
    </div>
  );
};

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 120, delay: 100 });
  }, []);

  function copytoText() {
    var copyText = "developer.vikash.msg@gmail.com"; // Hardcoded email

    var input = document.createElement("input");
    input.value = copyText;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    // Show a confirmation message
    alert("Email copied: " + copyText);
  }

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const toggleButton = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", toggleButton);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", toggleButton);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const typingTimeoutRef = useRef(null);
  const erasingTimeoutRef = useRef(null);
  const currentTextIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);

  useEffect(() => {
    const textElement = document.getElementById("Typing");
    const texts = ["Front-end Developer 💻", "Graphic Designer 🎨"];
    const typingSpeed = 100;
    const delayBetweenTexts = 1000;

    function type() {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;

      if (currentCharIndex < texts[currentTextIndex].length) {
        textElement.textContent +=
          texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndexRef.current += 1;
        typingTimeoutRef.current = setTimeout(type, typingSpeed);
      } else {
        erasingTimeoutRef.current = setTimeout(erase, delayBetweenTexts);
      }
    }

    function erase() {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;

      if (currentCharIndex > 0) {
        textElement.textContent = texts[currentTextIndex].substring(
          0,
          currentCharIndex - 1
        );
        currentCharIndexRef.current -= 1;
        erasingTimeoutRef.current = setTimeout(erase, typingSpeed);
      } else {
        currentTextIndexRef.current = (currentTextIndex + 1) % texts.length;
        currentCharIndexRef.current = 0;
        typingTimeoutRef.current = setTimeout(type, typingSpeed);
      }
    }

    // Start the typing effect
    type();

    // Cleanup function to clear timeouts if the component unmounts
    return () => {
      clearTimeout(typingTimeoutRef.current);
      clearTimeout(erasingTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="Home" id="Home">
        <div className="ProfileContainer">
          <div className="ProfileName1">
            I am
            <span className="NameSpan">Vikash Sharma</span>
          </div>
          <div className="ProfileName2">
            And I am <span id="Typing" className="Typing"></span>
          </div>
          <div className="ProfileIcon">
            <a href="https://www.linkedin.com/in/vikash-sharma-48b27a263/">
              {" "}
              <i className="bx bxl-linkedin linkedin"></i>
            </a>
            <a href="https://x.com/vikashsrma">
              {" "}
              <i className="fa-brands fa-x-twitter twitter"></i>
            </a>
            <a href="https://wa.me/919571404881?text=Hello%2C%20Vikash%20Sharma">
              {" "}
              <i className="bx bxl-whatsapp whatsapp"></i>
            </a>
          </div>
        </div>
        <img className="Profile" src={Image} alt="Profile" />
      </div>

      {/* Here the start the About page */}
      <section className="About" id="About">
        <h1 className="AboutTitle" data-aos="fade-down">
          ABOUT ME
        </h1>
        <div className="AboutContaienr">
          <div className="AboutDetails" data-aos="fade-down">
            <p>
              I'm a frontend web developer and graphic designer, adept at
              weaving together code, design, and creative solutions to craft
              captivating digital experiences. With a strong foundation in
              React.js and Svelte.js, I specialize in bringing websites to life
              through innovative problem-solving and meticulous attention to
              detail. My journey is fueled by a passion for transforming ideas
              into user-friendly interfaces that engage and inspire. By
              seamlessly integrating frontend and design principles, I aim to
              create memorable online experiences that resonate with audiences.
              Let's collaborate and bring your vision to reality with
              cutting-edge technology and thoughtful design.
            </p>
          </div>
        </div>
      </section>
      <section className="Skill" id="Skill">
        <h1 className="SkillTitle" data-aos="fade-down">
          My Skills
        </h1>
        <div className="SkillContainer">
          <div className="SoftwareSkillContainer">
            <h2 data-aos="fade-down">Software Skills</h2>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-html5" style={{ color: "#2430c5" }}></i>
                <h4>HTML5</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per html">
                  <span className="tooltip">85%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-css3" style={{ color: "#2430c5" }}></i>{" "}
                <h4>CSS3</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per css">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-javascript" style={{ color: "#2430c5" }}></i>{" "}
                <h4>JavaScript</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per js">
                  <span className="tooltip">30%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-react"></i> <h4>React Js</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per react-js">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <img src={Svelteicon} alt="img" />
                <h4>Svelte Js</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per svelte-js">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-python" style={{ color: "#2430c5" }}></i>
                <h4>Python</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per python">
                  <span className="tooltip">30%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <i className="bx bxl-bootstrap" style={{ color: "#2430c5" }}></i>{" "}
                <h4>Boostrap</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per bootstrap">
                  <span className="tooltip">65%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="SoftwareSkillContainer">
            <h2 data-aos="fade-down">Networking Skills</h2>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <img src={RouterIcon} alt="img" />
                <h4>Router Config</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per router">
                  <span className="tooltip">45%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <img src={SwitchIcon} alt="img" />
                <h4>Switch Config</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per Switch">
                  <span className="tooltip">40%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <img src={AccessPointIcon} alt="img" />
                <h4>AP Config</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per AP">
                  <span className="tooltip">50%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
                <img src={Point2Iocn} alt="img" />
                <h4>P2P Config</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per p2p">
                  <span className="tooltip">30%</span>
                </span>
              </div>
            </div>
            <div className="SkillContainerbtn" data-aos="zoom-in-up">
              <div className="SkillContainerbtn-title">
              <img src={CompAss} alt="img" />
              <h4>Hardware Config</h4>
              </div>
              <div className="skill-bar">
                <span className="skill-per hardware">
                  <span className="tooltip">50%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Project" id="Project">
        <h1 className="ProjectTitle" data-aos="fade-down">
          Projects
        </h1>
        <Carousel />
      </section>
      <section className="Contact" id="Contact">
        <h1 className="ContactTitle" data-aos="zoom-in-down">
          Get in Touch
        </h1>
        <h1 className="ContactHeading" data-aos="fade-up" data-aos-offset="130">
          Vikash Sharma
        </h1>
        <div
          className="ContactSocaillink"
          data-aos="fade-up"
          data-aos-offset="1"
          data-aos-duration="10"
        >
          <a href="https://www.linkedin.com/in/vikash-sharma-48b27a263/">
            {" "}
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://x.com/vikashsrma">
            {" "}
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://wa.me/919571404881?text=Hello%2C%20Vikash%20Sharma">
            {" "}
            <i className="bx bxl-whatsapp"></i>
          </a>
          <button onClick={copytoText} className="copyText">
            <i className="bx bxl-gmail"></i>
          </button>
          {/* <a href="/Login" ><span className="material-symbols-outlined">passkey</span></a> */}
        </div>
        <p
          className="ContactCopyright"
          data-aos="fade-up"
          data-aos-offset="1"
          data-aos-duration="10"
        >
          {" "}
          <i className="fa-regular fa-copyright"></i> 2024 All Right Reserved
        </p>
        {showScrollButton && (
          <button className="topArrowbtn" onClick={handleScrollToTop}>
            <i className="bx bx-chevron-up"></i>
          </button>
        )}
      </section>
    </>
  );
}
export default Home;
