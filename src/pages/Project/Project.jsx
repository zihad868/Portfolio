import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
    const [projects, setProjects] = useState();
    useEffect(() => {
        fetch('./project.json')
          .then(res => res.json())
          .then(data => setProjects(data))
    }, [])

    

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-4xl text-center font-bold mt-10">Project</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-2 gap-8">
                {
                    projects?.map(projects => <ProjectCard projects={projects}/>)
                }
            </div>
        </div>
    );
};

export default Project;