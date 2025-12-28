import { ProjectCard } from "@/components/molecules/ProjectCard";
import { PROJECT_CARDS } from "@/lib/constants/project-card.constants";

export function ProjectsSection() {

  return (
    <section id="projetos" className="py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos</h2>
            <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-300 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard projectCardProps={PROJECT_CARDS} />
          </div>
        </div>
      </div>
    </section>
  );
}
