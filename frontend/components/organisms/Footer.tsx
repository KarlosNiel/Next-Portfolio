export function Footer() {
    return (
        <footer className="border-t border-neutral-800 py-8 bg-black mt-5">
            <div className="container mx-auto max-w-8xl px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500">
                    <p className="text-muted-foreground text-sm">© 2025 Carlos Daniel. Todos os direitos reservados.</p>
                    <p className="text-muted-foreground text-sm">Desenvolvido com Next.js e Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}