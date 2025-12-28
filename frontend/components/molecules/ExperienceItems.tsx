import React from 'react';
import { TagProps, Tags } from './Tags';

type ExperienceItemProps = {
  period: string
  title: string
  company: string
  description: string
  technologies: TagProps[]
}

type ExperienceItemsListProps = {
  experienceItemProps: ExperienceItemProps[]
  size?: "sm" | "md" | "lg" | undefined
}

export function ExperienceItems({ experienceItemProps, size }: ExperienceItemsListProps) {
  return (
    <div className="space-y-2">
      {experienceItemProps.map((item) => (
        <div
          key={item.title}
          className="relative pl-8 pb-10 border-l border-border last:pb-0"
        >
          <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{item.period}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-primary font-medium">{item.company}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <Tags tagsProps={item.technologies} size={size} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

