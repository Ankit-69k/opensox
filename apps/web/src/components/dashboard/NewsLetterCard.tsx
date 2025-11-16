import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { NewsletterProps } from "@/types/newsletter";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NewsletterCardProps {
  newsletter: NewsletterProps;
}

export function NewsletterCard({ newsletter }: NewsletterCardProps) {
  const formattedDate = newsletter.date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/dashboard/newsletter/${newsletter.slug}`}
      className="block h-full  "
    >
      <Card className="h-full transition-all duration-300 bg-[#15161a] border border-[#1a1a1d] hover:border-ox-purple/50 hover:shadow-xl hover:shadow-ox-purple/10 hover:-translate-y-2 group relative overflow-hidden rounded-xl">
        {/* Accent Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-ox-purple/10 rounded-full blur-3xl group-hover:bg-ox-purple/20 transition-colors duration-300 -mr-16 -mt-16" />

        <CardHeader className="relative">
          <div className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-3 bg-[#1a1a1d] px-3 py-1 rounded-full w-fit border border-[#242529]">
            <Calendar className="w-3.5 h-3.5 text-ox-purple" />
            <time dateTime={newsletter.date.toISOString()}>
              {formattedDate}
            </time>
          </div>
          <h2 className="text-xl font-bold text-white group-hover:text-ox-purple transition-colors duration-300 leading-tight">
            {newsletter.title}
          </h2>
        </CardHeader>

        <CardContent className="relative">
          <p className="text-zinc-400 leading-relaxed mb-4 line-clamp-3">
            {newsletter.excerpt}
          </p>
          <div className="flex items-center gap-2 text-ox-purple font-medium text-sm group-hover:gap-3 transition-all duration-300">
            Read newsletter
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// Grid Wrapper for Newsletter Cards
export function NewsletterGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr py-2">
      {children}
    </div>
  );
}
