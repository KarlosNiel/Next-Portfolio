import { ExperienceItems } from "@/components/molecules/ExperienceItems";
import { EXPERIENCE_ITEMS_TAGS } from "@/lib/constants/experience-items.constants";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência</h2>
            <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-300 rounded-full" />
          </div>

          <ExperienceItems
            experienceItemProps={EXPERIENCE_ITEMS_TAGS}
            size="lg"
          />

        </div>
      </div>
    </section>
  );
}
