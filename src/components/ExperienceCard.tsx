"use client"

import { SelectExperience } from "@/db/schema"
import useAppStore from "@/hooks/useAppStore"
import { cn } from "@/lib/utils"
import Image from "next/image"


const ExperienceCard: React.FC<SelectExperience> = ({
  title,
  jobTitle,
  start,
  end,
  logo,
  tags
}) => {
  const { selectedTags } = useAppStore();
  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg shadow-sm">
      <div className=" flex gap-4">
        <Image
          src={logo}
          alt={title}
          width={80}
          height={64}
          className="rounded-lg m-0"
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h3 className="font-bold m-0">{jobTitle}</h3>
            <div className="flex gap-4">
              <span className="text-xs">{start}</span>
              <span className="text-xs">{"-"}</span>
              <span className="text-xs">{end}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <span>{title}</span>
          </div>
          
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag: string) => (
          <span
            key={tag}
            className={cn(
              "py-1 px-2 border border-gray-200 rounded-md text-xs",
              selectedTags.includes(tag.toLowerCase()) ? "text-white bg-neutral-900" : ""
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
