import { Separator } from "@heroui/react";
import { PresetationSection } from "../organisms/PresetationSection";

export function HomeLayout() {
    return (
        <>
            <PresetationSection />
            <Separator className="border-t border-neutral-800 my-4"/>
        </>
    )
}