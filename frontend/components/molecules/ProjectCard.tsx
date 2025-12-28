import { ArrowUpRight } from "lucide-react";
import { TagProps, Tags } from "./Tags";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: TagProps[];
  href?: string;
  image?: string;
};

type ProjectCardListProps = {
  projectCardProps: ProjectCardProps[];
  size?: "sm" | "md" | "lg" | undefined;
};

export function ProjectCard({ projectCardProps }: ProjectCardListProps) {
  return (
    <>
      {projectCardProps.map((item) => (
        <div
          key={item.title}
          className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
        >
          <div className="aspect-video bg-secondary/50 relative overflow-hidden">
            {item.image ? (
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl opacity-20">{"</>"}</span>
              </div>
            )}
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
                  Ver projeto <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            )}
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tags tagsProps={item.technologies} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
