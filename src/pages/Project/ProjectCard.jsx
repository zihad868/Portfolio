import { Link } from "react-router-dom";

const ProjectCard = ({ projects }) => {
  
  return (
    <div className="p-4">
      <img className="rounded-lg w-full h-72" src={projects?.projectPhoto} alt="" />
      <div className="mt-2">
        <h3 className="text-2xl font-bold">{projects?.projectTitle}</h3>
        <div className="grid grid-cols-3 gap-4">
          <button  class="btn btn-active btn-primary"><a href={projects?.gitClient} target="_blank">Client Site Code</a></button>
          <button class="btn btn-active btn-secondary"><a href={projects?.gitServer} target="_blank">Server Site Code</a></button>
          <button class="btn btn-active btn-accent"><a href={projects?.liveLink} target="_blank">Live Link</a></button>
        </div>
        <p className="mt-2">{projects?.projectDescription.split(' ').slice(0, 70).join(' ')}</p>
        <div className="">
           <Link to={`/project/${projects?._id}`}><button class="btn btn-outline btn-success mt-5 w-full">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
