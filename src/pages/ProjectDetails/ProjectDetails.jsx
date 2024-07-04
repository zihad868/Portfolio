import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(projects);

  const project = projects?.find((project) => project._id === parseInt(id));

  return (
    <div className="p-4 mt-10">
      <img className="rounded-lg" src={project?.projectPhoto} alt="" />
      <div className="mt-2">
        <h3 className="text-2xl font-bold">{project?.projectTitle}</h3>
        <div className="grid grid-cols-3 gap-4">
          <button class="btn btn-active btn-primary">
            <a href={project?.gitClient} target="_blank">
              Client Site Code
            </a>
          </button>
          <button class="btn btn-active btn-secondary">
            <a href={project?.gitServer} target="_blank">
              Server Site Code
            </a>
          </button>
          <button class="btn btn-active btn-accent">
            <a href={project?.liveLink} target="_blank">
              Live Link
            </a>
          </button>
        </div>
        <p className="mt-2">{project?.projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
