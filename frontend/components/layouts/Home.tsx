import { Separator } from "@heroui/react";
import { PresetationSection } from "../organisms/PresetationSection";
import { AboutSection } from "../organisms/AboutSection";
import { ExperienceSection } from "../organisms/ExperienceSection";
import { ProjectsSection } from "../organisms/ProjectsSection";
import { ContactSection } from "../organisms/ContactSection";

export function HomeLayout() {
    return (
        <>
            <PresetationSection />
            <Separator className="border-t border-neutral-800 my-4"/>
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}