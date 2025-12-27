"use client";

import {Tag, TagGroup} from "@heroui/react";

export type TagProps = {
  id: string
  icon?: React.ReactNode
  label: string
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
          <Tag key={tag.id} id={tag.id}>
            {tag.icon}
            {tag.label}
          </Tag>
        ))}
      </TagGroup.List>
    </TagGroup>
  );
}