import { PresentationSection } from "../organisms/PresetationSection";
import { AboutSection } from "../organisms/AboutSection";
import { ExperienceSection } from "../organisms/ExperienceSection";
import { ProjectsSection } from "../organisms/ProjectsSection";
import { ContactSection } from "../organisms/ContactSection";
import { SectionSeparator } from "../atoms/SectionSeparator";

export function HomeLayout() {
    return (
        <>
            <PresentationSection />
            <SectionSeparator />

            <AboutSection />
            <SectionSeparator />

            <ExperienceSection />
            <SectionSeparator />

            <ProjectsSection />
            <SectionSeparator />

            <ContactSection />
        </>
    )
}