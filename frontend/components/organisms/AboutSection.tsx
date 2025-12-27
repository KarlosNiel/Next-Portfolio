import { Tags } from "@/components/molecules/Tags";
import { TAGS } from "@/lib/constants/tags.constants";

export function AboutSection() {

  return (
    <section id="sobre" className="py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre</h2>
            <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-300 rounded-full" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Sou um desenvolvedor web apaixonado por criar interfaces
              intuitivas e experiências digitais que fazem a diferença. Com foco
              em código limpo, performance e acessibilidade, busco sempre
              entregar soluções que superem as expectativas.
            </p>
            <p>
              Ao longo da minha carreira, trabalhei em projetos diversos, desde
              startups até grandes empresas, sempre mantendo o compromisso com a
              qualidade e inovação. Acredito que a melhor tecnologia é aquela
              que resolve problemas reais de forma elegante.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">
              Tecnologias e Ferramentas
            </h3>
            <div className="flex flex-wrap gap-3">
              <Tags size="lg" tagsProps={TAGS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
