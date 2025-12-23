import { SOCIAL_MEDIA_ICONS } from "@/lib/constants/social-media-icons.constants";
import { SocialIcon } from "../atoms/SocialIcon";

export function PresetationSection() {
  return (
    <section className="flex items-center justify-center py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">Carlos Daniel</h1>
          <p className="text-2xl md:text-3xl font-medium text-blue-500">
            Desenvolvedor Web
          </p>
        </div>

        <p className="text-lg md:text-xl max-w-2xl text-neutral-500 leading-relaxed">
          Especializado em criar experiências web modernas, acessíveis e de alto
          desempenho. Transformo ideias em soluções digitais elegantes usando as
          tecnologias mais atuais.
        </p>
        
        <div className="flex flex-row gap-3 space-x-3 py-3">
          {SOCIAL_MEDIA_ICONS.map((item) => (
              <SocialIcon key={item.href} href={item.href} icon={item.icon} label={item.label} 
                className="bg-accent p-2 rounded-lg hover:bg-accent-hover duration-300"
              />
          ))}
        </div>
      </div>
    </section>
  );
}
