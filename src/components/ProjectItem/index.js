import "./index.css";

const ProjectItem = (props) => {
  const { data, index } = props;
  const { name, link, description, image } = data;

  const order = index % 2 === 1 ? "order" : "";
  //   const lastInd = index === -1;
  return (
    <li className="project-card">
      <div className={`details-card ${order}`}>
        <h1>{name}</h1>
        <p>{description}</p>
        <button type="button">
          <a href={link} target="__blank">
            View Project
          </a>
        </button>
      </div>
      <div className="image-card">
        <img src={image} alt={name} />
      </div>
    </li>
  );
};

export default ProjectItem;
