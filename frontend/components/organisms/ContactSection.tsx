import { Mail, MapPin, Phone } from "lucide-react";
import { EmailCard } from "../molecules/EmailCard";
import { ContactInfoItem } from "../molecules/ContactInfoItem";

export function ContactSection() {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="space-y-12  ">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contato</h2>
            <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-cyan-300 rounded-full" />
          </div>

          <div className="flex flex-row">
            <div className="space-y-6 max-w-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estou sempre aberto a novos projetos e oportunidades. Entre em
                contato para conversarmos sobre como posso ajudar!
              </p>

              <div className="space-y-4">
                <ContactInfoItem
                  title={"Email"}
                  info={"carlosdanieltowork@gmail.com"}
                  icon={<Mail />}
                />
                <ContactInfoItem
                  title={"Telefone"}
                  info={"+55 87 99167-5307"}
                  icon={<Phone />}
                />
                <ContactInfoItem
                  title={"Localização"}
                  info={"Pernambuco, Brasil"}
                  icon={<MapPin />}
                />
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <EmailCard /> 
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
