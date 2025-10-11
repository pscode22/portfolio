import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <section className="grid md:grid-cols-2 gap-6 py-10">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </section>
  );
}
