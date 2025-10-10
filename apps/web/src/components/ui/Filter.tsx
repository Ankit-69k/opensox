"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useFilterInputStore } from "@/store/useFilterInputStore";
import clsx from "clsx";
import { useState } from "react";
import { Checkbox } from "./checkbox";

export default function Filter({
  filterName,
  filters,
  onClick,
  multiple = false,
}: {
  filterName: string;
  filters: string[];
  onClick?: () => void;
  multiple?: boolean;
}) {
  const { updateFilters } = useFilterInputStore();
  const [selected, setSelected] = useState<string | string[]>(multiple ? [] : "");

  const recordFilterInput = (filter: string) => {
    let updatedValue: string | string[];

    if (multiple) {
      // Toggle checkbox selections
      const current = selected as string[];
      updatedValue = current.includes(filter) ? current.filter((f) => f !== filter) : [...current, filter];
    } else {
      // Single choice (radio)
      updatedValue = filter;
    }

    setSelected(updatedValue);
    updateFilters({ [filterName]: updatedValue });
  };

  const triggerClasses = clsx("text-sm font-medium", {
    "text-slate-500": ["Hire contributors", "Funding", "Trending"].includes(filterName),
  });

  return (
    <div onClick={onClick}>
      <AccordionItem value={filterName} className="px-3">
        <AccordionTrigger className={triggerClasses}>{filterName}</AccordionTrigger>
        <AccordionContent
          className={
            filterName === "Hire contributors" || filterName === "Funding" || filterName === "Trending"
              ? "text-white-100"
              : ""
          }
        >
          {multiple ? (
            // Multiple-choice (checkbox)
            <div className="space-y-2">
              {filters.map((filter) => (
                <div key={filter} className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox
                    id={filter}
                    checked={(selected as string[]).includes(filter)}
                    onCheckedChange={() => recordFilterInput(filter)}
                  />
                  <Label htmlFor={filter} className="cursor-pointer select-none">
                    {filter}
                  </Label>
                </div>
              ))}
            </div>
          ) : (
            // Single-choice (radio)
            <RadioGroup value={selected as string}>
              {filters.map((filter) => (
                <div key={filter} className="flex items-center space-x-2">
                  <RadioGroupItem value={filter} id={filter} onClick={() => recordFilterInput(filter)} />
                  <Label htmlFor={filter} onClick={() => recordFilterInput(filter)}>
                    {filter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
