import { ProjectCard } from "@/components/project_card";
import { getProjects } from "./getProjects";

export async function Projects() {
  const projects = await getProjects();
  return (
    <div>
      <div className="mx-10 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
