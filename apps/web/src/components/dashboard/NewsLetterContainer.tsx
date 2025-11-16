"use client";

import React, { useMemo, useState } from "react";
import { useSubscription } from "@/hooks/useSubscription";
import { Loader2, Search } from "lucide-react";
import { ErrMsg } from "../ui/ErrMsg";
import PremiumException from "./PremiumException";
import { NewsletterCard, NewsletterGrid } from "./NewsLetterCard";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { NewsletterProps } from "@/types/newsletter";

export default function NewsLetterContainer({
  newsletters,
}: {
  newsletters: NewsletterProps[];
}) {
  const { isPaidUser, isLoading: subscriptionLoading } = useSubscription();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<"all" | number>("all");
  const [selectedMonth, setSelectedMonth] = useState<"all" | number>("all");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const availableYears = useMemo(() => {
    const years = new Set<number>();
    newsletters.forEach((n) => years.add(new Date(n.date).getFullYear()));
    return [...years].sort((a, b) => b - a);
  }, [newsletters]);

  const filteredNewsletters = useMemo(() => {
    return newsletters.filter((newsletter) => {
      const date = new Date(newsletter.date);
      const year = date.getFullYear();
      const month = date.getMonth();

      if (selectedYear !== "all" && year !== selectedYear) return false;
      if (selectedMonth !== "all" && month !== selectedMonth) return false;

      const text = `${newsletter.title} ${newsletter.excerpt}`.toLowerCase();
      return text.includes(searchTerm.toLowerCase());
    });
  }, [newsletters, searchTerm, selectedMonth, selectedYear]);

  const grouped = useMemo(() => {
    const groups: Record<string, { label: string; items: typeof newsletters }> =
      {};

    filteredNewsletters.forEach((item) => {
      const date = new Date(item.date);
      const key = `${date.getFullYear()}-${date.getMonth()}`;
      const label = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

      if (!groups[key]) groups[key] = { label, items: [] };
      groups[key].items.push(item);
    });

    return Object.values(groups).sort((a, b) => {
      const dateA = new Date(a.items[0].date).getTime();
      const dateB = new Date(b.items[0].date).getTime();
      return dateB - dateA;
    });
  }, [filteredNewsletters]);

  if (subscriptionLoading)
    return (
      <div className="flex justify-center py-20 text-white">
        <Loader2 className="animate-spin h-6 w-6" />
      </div>
    );

  if (!isPaidUser) return <PremiumException />;

  return (
    <div className="w-full p-6">
      <div className="flex flex-col gap-4 pb-6 md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Opensox Newsletter
        </h2>

        <div className="flex gap-3 flex-col md:flex-row">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <Input
              className="bg-[#15161a] border border-[#1d1d21] rounded-lg pl-10 pr-3 py-2 text-white placeholder:text-zinc-500 focus:ring-2 ring-ox-purple/40 outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Year Filter */}
          <Select
            value={selectedYear === "all" ? "all" : String(selectedYear)}
            onValueChange={(val: string) =>
              setSelectedYear(val === "all" ? "all" : Number(val))
            }
          >
            <SelectTrigger className="w-[160px] bg-[#15161a] border border-[#1d1d21] text-white focus:ring-2 ring-ox-purple/40">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="bg-[#15161a] border-[#1d1d21] text-white">
              <SelectItem value="all">All Years</SelectItem>
              {availableYears.map((y) => (
                <SelectItem key={y} value={String(y)}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Month Filter */}
          <Select
            value={selectedMonth === "all" ? "all" : String(selectedMonth)}
            onValueChange={(val: string) =>
              setSelectedMonth(val === "all" ? "all" : Number(val))
            }
          >
            <SelectTrigger className="w-[160px] bg-[#15161a] border border-[#1d1d21] text-white focus:ring-2 ring-ox-purple/40">
              <SelectValue placeholder="Month" />
            </SelectTrigger>

            <SelectContent className="bg-[#15161a] border-[#1d1d21] text-white">
              <SelectItem value="all">All Months</SelectItem>
              {monthNames.map((m, i) => (
                <SelectItem key={i} value={String(i)}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {grouped.length ? (
        <div className="space-y-10">
          {grouped.map((group) => (
            <div key={group.label}>
              <h3 className="text-lg font-semibold text-ox-purple mb-3">
                {group.label}
              </h3>

              <NewsletterGrid>
                {group.items.map((newsletter) => (
                  <NewsletterCard
                    key={newsletter.slug}
                    newsletter={newsletter}
                  />
                ))}
              </NewsletterGrid>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center py-20">
          <ErrMsg text="No newsletters found.." />
        </div>
      )}
    </div>
  );
}
