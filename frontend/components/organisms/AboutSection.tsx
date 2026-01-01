import { Tags } from "@/components/molecules/Tags";
import { INTEREST_TECHS, TECHS_USED } from "@/lib/constants/tags.constants";

export function AboutSection() {

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        <div className="space-y-6 max-w-4xl">

          <header>
            <h2 className="flex flex-col text-3xl md:text-5xl font-bold mb-4 gap-1 font-roboto">Sobre Mim</h2>
            <div className="h-1 w-[15%] bg-linear-to-r from-blue-500 to-cyan-300 rounded-full" />
          </header>

          <div className="space-y-6 text-lg text-neutral-500 font-inter">
            <p>
              Sou um desenvolvedor web, formado em Análise e Desenvolvimento de 
              Sistemas pela UNIFIP, apaixonado por criar interfaces
              intuitivas e sistemas eficientes. Busco sempre
              entregar soluções que superem as expectativas e me
              melhorar como profissional no mercado de trabalho.
            </p>

            <p>
              Me formei recentemente em ADS, mas estou buscando desenvolver novos
              projetos para desenvolver ainda mais meus conhecimentos, e
              sou colaborador na empresa i5Lab como desenvolvedor Front-End.
            </p>
          </div>

          <footer className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2 font-roboto">
                Tecnologias e Ferramentas
              </h3>

              <div className="flex flex-wrap gap-3">
                <Tags size="lg" tagsProps={TECHS_USED} />
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 font-roboto">
                Tenho Interesse
              </h3>

              <div className="flex flex-wrap gap-3">
                <Tags size="lg" tagsProps={INTEREST_TECHS} />
              </div>
            </section>
          </footer>

        </div>
      </div>
    </section>
  );
}
