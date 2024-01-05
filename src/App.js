import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectItem from "./components/ProjectItem";

import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

import "./App.css";

import profile from "./images/profile.jpg";
import projec1 from "./images/project-1.png";
import projec2 from "./images/project-2.jpg";
import projec3 from "./images/project 3.png";

const initialData = [
  {
    id: uuidv4(),
    name: "My Portfolio Website",
    link: "https://veeresh3001.github.io/profile/",
    image: profile,
    description: `A fully responsive website that offers a comprehensive know about my details like Education,
       Skills and Projects and more.
      I used only HTML and CSS for creating this website. After that i added this project in Github
      and publish it for sharing everywhere`,
  },
  {
    id: uuidv4(),
    name: "Jobby App",
    link: "https://veerajobs3001.ccbp.tech/",
    image: projec2,
    description: `Developed a comprehensive job search solution application, Jobby App.
    Designed pages for Login, Home, Jobs, and Job item details with React components and form
    inputs. Secured user data with JWT tokens, REST API calls, and local storage. 
    Implemented protected routes and persisted login state with React Router and local storage`,
  },
  {
    id: uuidv4(),
    name: "Project 3",
    link: "",
    image: projec1,
    description: `A fully responsive website that offers a comprehensive and detailed
    information about project. Designed to provide the best user experience with HTML structure
    elements and Bootstrap components.`,
  },
];

class App extends Component {
  state = {
    projectsData: initialData,
    nameInp: "",
    linkInp: "",
    descriptionInp: "",
  };

  onsubmitForm = (event) => {
    event.preventDefault();
    // alert("Adding project !!!!");
    const { nameInp, linkInp, descriptionInp } = this.state;
    const id = uuidv4();
    const newItem = {
      id,
      name: nameInp,
      link: linkInp,
      description: descriptionInp,
      image: projec3,
    };
    this.setState((prev) => ({
      projectsData: [...prev.projectsData, newItem],
    }));
  };

  onChangeNameInput = (event) => {
    this.setState({ nameInp: event.target.value });
  };

  onChangeLinkInput = (event) => {
    this.setState({ linkInp: event.target.value });
  };

  onChangeDesInput = (event) => {
    this.setState({ descriptionInp: event.target.value });
  };

  render() {
    const { nameInp, linkInp, descriptionInp, projectsData } = this.state;
    return (
      <div>
        <nav id="head-container">
          <h1 className="name">Veeresh Ediga</h1>
          <ul className="nav-list">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="about">
          <div className="about-me">
            <h3>Front End Developer</h3>
            <h1>
              Hello My Name Is, <br />
              Veeresh Ediga
            </h1>
            <p>
              I am a passionate and skilled web developer with expertise in
              HTML, CSS, JavaScript, React Js, Node Js, SQLite and Python. I
              have experience in developing comprehensive job search solutions
              and responsive websites. My goal is to create user-friendly and
              visually appealing applications. I am excited to contribute my
              skills to a dynamic and innovative team.
            </p>
            <div className="btns-card">
              <button type="button" className="project-btn">
                <a href="/projects">Projects</a>
              </button>
              <button type="button" className="linkedin-btn">
                Linkedin
              </button>
            </div>
          </div>
          <div className="profile">
            <img className="image" src={profile} alt="prfile" />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="add-project-card">
          <h1 className="heading">Add Project</h1>
          <form className="form" onSubmit={this.onsubmitForm}>
            <label>Project Name:</label>
            <input
              onChange={this.onChangeNameInput}
              value={nameInp}
              type="text"
              placeholder="Enter project name"
              required
            />
            <label>Project Name:</label>
            <input
              onChange={this.onChangeLinkInput}
              value={linkInp}
              type="text"
              placeholder="Enter Project link"
              required
            />
            <label>Project Name:</label>
            <textarea
              onChange={this.onChangeDesInput}
              value={descriptionInp}
              type="text"
              placeholder="Enter description"
            />
            <button type="submit">Add Project</button>
          </form>
        </div>
        <hr className="hr-line" />
        <div id="projects">
          <h1 className="heading">Projects List</h1>
          <ul className="projects-list">
            {projectsData.map((each, index) => (
              <ProjectItem data={each} key={each.id} index={index} />
            ))}
          </ul>
        </div>
        <hr className="hr-line" />
        <div id="contact">
          <div className="contact-card">
            <AiFillInstagram size={62} className="icon" />
            <FaLinkedin size={54} className="icon" />
            <IoIosMail size={64} className="icon" />
          </div>
          <p>Welcome @2024 Thankk you for watching.</p>
        </div>
      </div>
    );
  }
}

export default App;
