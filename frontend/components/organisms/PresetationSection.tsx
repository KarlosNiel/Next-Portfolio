  import { SOCIAL_MEDIA_ICONS } from "@/lib/constants/social-media-icons.constants";
  import { SocialIcon } from "../atoms/SocialIcon";
  import Image from "next/image";
  import { Button, Chip } from "@heroui/react";
  import { ArrowRightIcon } from "../ui/icons/motion/arrow-right";
import { WaypointsIcon } from "../ui/icons/motion/waypoints";

  export function PresentationSection() {
    return (
      <section 
        className="flex items-center justify-center py-14 sm:py-24"
        aria-labelledby="presetation-title"
        >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-4 flex flex-col-reverse md:flex-row">

          <div className="space-y-3">
            <div className="hidden md:flex flex-row gap-2">
              <Chip className="text-md font-inter p-1.5 px-3 bg-blue-500/10 border border-blue-500 text-blue-500">
                Analista de Sistemas
              </Chip>

              <Chip className="text-md font-inter p-1.5 px-3 bg-green-500/10 border border-green-500 text-green-500">
                Desenvolvedor Web
              </Chip>
            </div>

            <header className="pb-4 flex flex-col items-center sm:items-start gap-1">
              <h1 className="text-5xl text-center sm:text-left md:text-7xl font-bold font-roboto">
                Carlos Daniel
              </h1>
              <div className="h-1 w-[40%] sm:w-[20%] bg-linear-to-r from-blue-500 to-cyan-300 rounded-full" />
            </header>

            <p className="text-center sm:text-left text-lg max-w-2xl text-neutral-500 font-inter">
              Olá! Sou formado em Análise e Densenvolvimento de Sistemas. sou um desenvolvedor FullStack 
              especializado em criar experiências web modernas, acessíveis e de alto
              desempenho. Transformo ideias em soluções digitais de qualidade utilizando
              tecnologias atuais no mercado.
            </p>
            
            <div className="flex flex-row gap-3 py-3 justify-center sm:justify-normal">
              {SOCIAL_MEDIA_ICONS.map((item) => (
                  <SocialIcon 
                    key={item.href} 
                    href={item.href} 
                    icon={item.icon} 
                    label={item.label} 
                    className={item.className}
                  />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row md:flex-row items-center  gap-3">
              <Button className={"rounded-md p-7 bg-blue-500 shadow-sm md:mt-2 text-white hover:bg-blue-400 duration-300"}>
                <p className="font-inter">
                  Conheça minha trajetória
                </p>
                <WaypointsIcon />
              </Button>

              <Button className={"rounded-md p-7 bg-transparent shadow-sm md:mt-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-slate-900 dark:border dark:border-white duration-300"}>
                <p className="font-inter">
                  Contate-Me
                </p>
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center pb-12 sm:pb-0">
            <div className="w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/foto_carlos.jpeg"
                alt="Foto de Carlos Daniel"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>
    );
  }
