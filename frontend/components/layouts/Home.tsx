import { Separator } from "@heroui/react";
import { PresetationSection } from "../organisms/PresetationSection";
import { AboutSection } from "../organisms/AboutSection";

export function HomeLayout() {
    return (
        <>
            <PresetationSection />
            <Separator className="border-t border-neutral-800 my-4"/>
            <AboutSection />
        </>
    )
}