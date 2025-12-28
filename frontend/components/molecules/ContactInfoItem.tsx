type ContactInfoItemProps = {
  title: string;
  info: string;
  icon?: React.ReactNode;
  href?: string;
};

export function ContactInfoItem({ title, info, icon, href }: ContactInfoItemProps) {
  return (
    <div className="flex items-center gap-4 text-muted-foreground">
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
        <div className="w-5 h-5 flex items-center">{icon}</div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <a
          href={href}
          className="text-foreground hover:text-primary transition-colors"
        >
          {info}
        </a>
      </div>
    </div>
  );
}
