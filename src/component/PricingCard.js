import "./PricingCardStyles.css";
import Profile from "../assets/Profiles.jpg";

const PricingCard = () => {
  return (
    <div className="pricing">
      <h1 className="abo">About</h1>
      <div className="card-container">
        <div className="card">
          <div className="pro">
            <img className="into-img" src={Profile} alt="Profile" />
          </div>
          {/* <h3>Basic -</h3> */}

          {/* <p className="btc">Name - Rahul Chaudhary</p> */}
          <p>
            <strong>Name</strong> - Rahul Chaudhary
          </p>
          <p>
            <strong>Degree</strong> - Master of Computer Application(MCA)
          </p>
          <p>
            <strong>Father</strong> - Baijnath Chaudhary
          </p>
          <p>
            <strong>Mother</strong> - Sudha Devi
          </p>
          <p>
            <strong>Current Address</strong> - Greater Noida, Uttar Pradesh
          </p>
          <p>
            <strong>Address</strong> - Siddharth Nagar, Uttar Pradesh
          </p>
          <p>
            <strong>Marital Status</strong> - Single
          </p>
          <p>
            <strong>Language</strong> - English, Hindi
          </p>
          <p>
            <strong>Hobies</strong> - Cooking Food, Listening Music
          </p>
          {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
        <div className="card">
          <h2>Skill</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc"></p> */}
          <h6>Programming Language</h6>
          <p>Java || PHP || JavaScript</p>
          <h6>Frontend Development</h6>
          <p>HTML || CSS || React || Bootstrap</p>
          <h6>Backend Development</h6>
          <p>Node.Js || Express</p>
          <h6>Database</h6>
          <p>MYSQl || MongoDB</p>
          <h6>Core Subjects</h6>
          <p>
            Data Structures || Operating System || Computer Networks || OOPs{" "}
          </p>
          <h6>Other Technology</h6>
          <p>GIT || Github || MS-Office || Postman</p>
          <h2>Soft-Skill</h2>
          <p>
            Communication || Team Work || Aptitude || Problem - Solving || Time
            Management
          </p>
          {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
        <div className="card">
          <h2>Education</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc">$ 100</p> */}
          <h6>Master of Computer Applications(MCA)</h6>
          <p>
            Noida Institute of Engineering and Technology, Greater Noida, UP
            (2025) - 8.05 CGPA
          </p>
          <h6>Bachelor of Computer Application(BCA)-</h6>
          <p>Gautam Buddha University, Greater Noida, UP (2022) - 7.83 CGPS</p>
          <h6>HIGHER SECONDARY EDUCATION</h6>
          <p>
            Rais Ahmad Inter Collage, Itwa, Siddharth Nagar,UP (2019) - 68.2%
          </p>
          <h6>SECONDARY EDUCATION</h6>
          <p>
            Rais Ahmad Inter Collage, Itwa, Siddharth Nagar,UP (2017) - 83.83 %
          </p>
          {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>

        <div className="card">
          <h2>Experience</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc">$ 100</p> */}
          <h6>Full-Stack Developer Intern</h6>
          <h6>Skodefy Technology Private Limited</h6>
          <p>
            <b>( Jan 2025 - May 2025)</b>
          </p>
          <p>Onsite, Greater Noida</p>
          <p>PHP, JavaScript, HTML, CSS, jQuery, Bootstrap</p>
          <ul>
            <li>
              ⇨ Developed a Fee Management System as part of a School Management
              System using PHP, JavaScript, jQuery, and Ajax.
            </li>
            <li>
              ⇨ Implemented features for tracking student fees, payment status,
              and generating fee receipts.
            </li>
            <li>
              ⇨ Enhancing database functionality using SQL and optimizing
              backend performance.
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1Rd_VzJo3eIg2n-J1-K0Svn7QR60o-G9o/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
        <div className="card">
          <h2>Projects</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc">$ 100</p> */}
          <h6>Music WebSites Design</h6>
          <ul>
            <li>
              ⇨ Designed a responsive and user-friendly music player interface
              using HTML, CSS, and JavaScript.
            </li>
            <li>
              ⇨ Focused on improving user experience by providing intuitive
              controls and fast response time.
            </li>
            <li>
              ⇨ Collected user feedback from peers and implemented enhancements,
              practicing feedback-based improvements.
            </li>
          </ul>
          <a
            href="https://rahulchaudhary8.github.io/Music_Websites/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Face Mask Detection Using Python</h6>
          <ul>
            <li>
              ⇨ Designed a responsive and user-friendly music player interface
              using HTML, CSS, and JavaScript.
            </li>
            <li>
              ⇨ Focused on improving user experience by providing intuitive
              controls and fast response time.
            </li>
            <li>
              ⇨ Collected user feedback from peers and implemented enhancements,
              practicing feedback-based improvements.
            </li>
          </ul>
          <a
            href="https://github.com/RahulChaudhary8/Face_Mask_detection-_using_Python"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Virtual Paint Using Python</h6>
          <ul>
            <li>
              ⇨ Designed and developed a real-time virtual painting application
              using Python and OpenCV to make online or smart classroom sessions
              more interactive and fun.
            </li>
            <li>
              ⇨ Enabled users (especially kids) to draw on a virtual whiteboard
              using color markers detected by webcam.
            </li>
            <li>
              ⇨ Used color detection and contour tracking to allow motion-based
              painting without the need for touch or mouse input.
            </li>
          </ul>
          <a
            href="https://github.com/RahulChaudhary8/Virtual_Paint_Using_Python"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>

        <div className="card">
          <h2>Projects</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc">$ 100</p> */}
          <h6>Snake Game</h6>
          <ul>
            <li>
              ⇨ Built the classic Snake Game using HTML, CSS, and JavaScript.
            </li>
            <li>
              ⇨ Implemented core features such as snake movement, food
              consumption, score tracking, and game-over logic.
            </li>
            <li>
              ⇨ Designed a clean and responsive UI with real-time updates for a
              smooth gaming experience.
            </li>
          </ul>
          <a
            href="https://rahulchaudhary8.github.io/Snake_Game/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Resort Website</h6>
          <ul>
            <li>
              ⇨ Developed a fully responsive resort website using HTML, CSS, and
              JavaScript.
            </li>
            <li>
              ⇨ Showcased resort features like rooms, amenities, gallery, and
              contact form with an intuitive layout.
            </li>
            <li>
              ⇨ Integrated smooth navigation, interactive elements, and
              attractive visuals to enhance user engagement.
            </li>
          </ul>
          <a
            href="https://rahulchaudhary8.github.io/Resort.in/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Restaurant Website</h6>
          <ul>
            <li>
              ⇨ Designed and developed a fully responsive restaurant website
              using HTML, CSS, and JavaScript.
            </li>
            <li>
              ⇨ Included features like menu showcase, image gallery, contact
              form, and reservation section.
            </li>
            <li>
              ⇨ Focused on user-friendly navigation, modern layout, and visually
              appealing UI to attract visitors.
            </li>
          </ul>
          <a
            href="https://rahulchaudhary8.github.io/Restaurant_Web_Site.com/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>

        <div className="card">
          <h2>Certificates</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc">$ 100</p> */}

          <h6>Fontend Web Development.</h6>
          <p>
            Completed a 2-month certified course in{" "}
            <strong>Frontend Web Development</strong> from{" "}
            <strong>Udemy</strong>, covering core web technologies including
            HTML, CSS, JavaScript, and responsive design techniques.
          </p>
          <a
            href="https://drive.google.com/file/d/1_Wd54JZjdQDZ1IfvJ97r5NVFVBk9Sbf_/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Android Application Development</h6>
          <p>
            Successfully completed a 1-month course in{" "}
            <strong>Android Application Development</strong> through{" "}
            <strong>Great Learning</strong>, focusing on the fundamentals of
            mobile app development using Android SDK and tools.
          </p>
          <a
            href="https://drive.google.com/file/d/12g1PT9g4m-pLYnn9-lAKhglT8ake58Cg/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Barclays LifeSkill Program</h6>
          <p>
            Successfully completed the
            <strong>Barclays LifeSkills Program</strong> conducted by the
            <strong>GTT Foundation</strong>, aimed at developing essential soft
            skills and workplace readiness.
          </p>
          <a
            href="https://drive.google.com/file/d/1SQip2OOaTbUCelad4Kvzb5CgzSO0PhHN/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>How to Prepair for an Interview? Program</h6>
          <p>
            Successfully completed the
            <strong>“How to Prepare for an Interview?”</strong> program through
            <strong>Great Learning</strong>, which provided practical tips, mock
            strategies, and communication techniques for job interview success.
          </p>
          <a
            href="https://drive.google.com/file/d/1jn2XOioqBC_yHmD98sNRl8F9-xGOvLsZ/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
        <div className="card">
          <h2>Certificates</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc">$ 100</p> */}

          <h6>Introduction to AWS</h6>
          <p>
            Successfully completed the
            <strong>“Introduction to AWS”</strong> course, which provided
            foundational knowledge of <strong>Internet of Things (IoT)</strong>
            concepts using <strong>AWS (Amazon Web Services)</strong>. The
            course covered topics like AWS IoT Core, device connectivity, data
            processing, security, and real-world applications of IoT solutions
            on the AWS cloud platform.
          </p>
          <a
            href="https://drive.google.com/file/d/10votJZ-C_oTuVIyPrQ7ONAW_l4EjHqIA/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Basics of Python</h6>
          <p>
            Successfully completed the <strong>“Basics of Python”</strong>{" "}
            course, covering core programming concepts such as variables, data
            types, operators, conditional statements, loops, functions, and
            basic input/output. The course provided a strong foundation for
            further learning in Python and programming logic.
          </p>

          <a
            href="https://drive.google.com/file/d/1L9XNNfTSogEFz0EQ1LHRm2BSu_d8lZJF/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Design Thinking for Innovation</h6>
          <p>
            Successfully completed the{" "}
            <strong>“Design Thinking for Innovation”</strong> course, which
            focused on user-centric problem-solving approaches. Learned to apply
            key stages of the design thinking process—
            <strong>Empathize, Define, Ideate, Prototype, and Test</strong>—to
            drive innovation and develop creative, effective solutions to
            real-world challenges.
          </p>

          <a
            href="https://drive.google.com/file/d/1QV5piy9RGk25XtboOK_JI1YGMOMQCMBB/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>HTML5 – The Language</h6>
          <p>
            Successfully completed the <strong>“HTML5 – The Language”</strong>{" "}
            course, gaining in-depth understanding of <strong>HTML5</strong>{" "}
            structure and features. Covered semantic elements, multimedia
            integration, forms, APIs, and best practices for building modern,
            accessible, and responsive web pages.
          </p>

          <a
            href="https://drive.google.com/file/d/128mbrhVnYif4lrorQciPMZdiGMgM5QWE/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
        <div className="card">
          <h2>Certificates</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc">$ 100</p> */}

          <h6>Introduction to Cloud Computing</h6>
          <p>
            Successfully completed the{" "}
            <strong>“Introduction to Cloud Computing”</strong> course, which
            covered the core concepts of cloud computing, including{" "}
            <strong>IaaS, PaaS, SaaS</strong> models, deployment types (public,
            private, hybrid), virtualization, scalability, and key benefits of
            using cloud technologies in modern IT environments.
          </p>

          <a
            href="https://drive.google.com/file/d/1mW6Idepn-K0PAFqleA9xqxUCLu_jTWsz/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Linux Command Line for Beginners</h6>
          <p>
            Successfully completed the{" "}
            <strong>“Linux Command Line for Beginners”</strong> course, learning
            essential Linux commands for navigating, managing files and
            directories, handling permissions, and executing basic shell
            operations. The course provided a strong foundation in using the
            Linux terminal for everyday tasks.
          </p>

          <a
            href="https://drive.google.com/file/d/1hOVYqJyCTZ76pYhbtnbJAwyZ9IhB-_UF/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>MongoDB Administration</h6>
          <p>
            Successfully completed the <strong>“MongoDB Administration”</strong>{" "}
            course, gaining practical knowledge of{" "}
            <strong>
              MongoDB architecture, CRUD operations, indexing, replication,
              sharding
            </strong>
            , and performance tuning. Learned to install, configure, monitor,
            and manage MongoDB databases in real-world scenarios.
          </p>

          <a
            href="https://drive.google.com/file/d/18dBBJWW7EqRxyneCCyiU7MURxwJbT1Fr/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Network Fundamentals</h6>
          <p>
            Successfully completed the <strong>“Network Fundamentals”</strong>{" "}
            course, covering the core principles of computer networking
            including{" "}
            <strong>
              network types, OSI and TCP/IP models, IP addressing, subnetting,
              routing, switching
            </strong>
            , and common networking protocols. Built a strong foundation for
            understanding how data is transmitted across networks.
          </p>

          <a
            href="https://drive.google.com/file/d/1iHfyc_O847p0B4W8l7GKJJ-gPQ6OnCDj/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
        <div className="card">
          <h2>Certificates</h2>
          {/* <span className="bar"></span> */}
          {/* <p className="btc">$ 100</p> */}

          <h6>Next Gen Technology</h6>
          <p>
            Successfully completed the <strong>“Next Gen Technology”</strong>{" "}
            course, exploring emerging technologies that are shaping the future,
            including{" "}
            <strong>
              Artificial Intelligence, Machine Learning, Blockchain, Internet of
              Things (IoT), Cloud Computing
            </strong>
            , and <strong>Cybersecurity</strong>. Gained insights into their
            real-world applications and impact across industries.
          </p>

          <a
            href="https://drive.google.com/file/d/1N0jxo7MVLykYmiXbYByS_SMha3qsfilq/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>IoT Edge Computing: Introduction to AWS Greengrass</h6>
          <p>
            Successfully completed the{" "}
            <strong>
              “IoT Edge Computing: Introduction to AWS Greengrass”
            </strong>{" "}
            course, learning how to extend cloud capabilities to local devices
            using <strong>AWS IoT Greengrass</strong>. Covered topics such as
            edge computing fundamentals, device communication, deploying Lambda
            functions locally, and building intelligent, responsive IoT
            applications with reduced latency.
          </p>

          <a
            href="https://drive.google.com/file/d/1hO0o30uxj0tzj3TL_NoSqqzoLiobybFt/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>
            Software Engineering Fundamentals – Software Development and Testing
          </h6>
          <p>
            Successfully completed the{" "}
            <strong>
              “Software Engineering Fundamentals – Software Development and
              Testing”
            </strong>{" "}
            course, gaining foundational knowledge of the{" "}
            <strong>software development life cycle (SDLC)</strong>, software
            design principles, and <strong>testing methodologies</strong>.
            Covered topics included requirements analysis, design,
            implementation, unit testing, integration testing, and debugging
            practices.
          </p>

          <a
            href="https://drive.google.com/file/d/19u-6iuh-Egnjjyh4p1jyYlp_vHA3bQ01/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <h6>Introduction to Python</h6>
          <p>
            Successfully completed the <strong>“Introduction to Python”</strong>{" "}
            course, covering the basics of Python programming including{" "}
            <strong>
              variables, data types, operators, control structures, loops,
              functions
            </strong>
            , and basic input/output. Developed a strong foundation for writing
            simple Python programs and understanding core programming logic.
          </p>

          <a
            href="https://drive.google.com/file/d/1FBcNGcOkkbhkEsEuU_61TqgWRG6p7dI9/view?usp=sharing"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
