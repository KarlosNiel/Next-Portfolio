import { Button } from "@heroui/react";

type IconButtonProps = {
    children: React.ReactNode
}

export function IconButton({children}: IconButtonProps) {
    return (
        <Button isIconOnly className={"flex items-center justify-center rounded-lg"}>
            {children}
        </Button>
    )
}