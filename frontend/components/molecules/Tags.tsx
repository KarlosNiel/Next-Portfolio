"use client";

import {Tag, TagGroup} from "@heroui/react";

export type TagProps = {
  id: string
  icon?: React.ReactNode
  label: string
  className?: string
}

export type TagsListProps = {
  tagsProps: TagProps[]
  size?: "sm" | "md" | "lg" | undefined
}

export function Tags({ tagsProps, size }: TagsListProps) {
  return (
    <TagGroup size={size} aria-label="Tags" selectionMode="single">
      <TagGroup.List>
        {tagsProps.map(tag => (
          <Tag key={tag.id} id={tag.id} className={`${tag.className} text-white rounded-xl px-3 text-[14px]`}>
            <span className="gap-1 leading-none py-0.5">
              {tag.icon}
              {tag.label}
            </span>

          </Tag>
        ))}
      </TagGroup.List>
    </TagGroup>
  );
}