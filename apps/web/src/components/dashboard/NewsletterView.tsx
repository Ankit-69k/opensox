"use client";

import { useSubscription } from "@/hooks/useSubscription";
import { NewsletterProps } from "@/types/newsletter";
import { ArrowLeft, Calendar, Loader2 } from "lucide-react";
import PremiumException from "./PremiumException";

import { MarkdownViewer } from "./MarkdownViewer";
import Link from "next/link";

interface NewsletterViewProps {
  newsletter: NewsletterProps;
}

export function NewsletterView({ newsletter }: NewsletterViewProps) {
  const { isPaidUser, isLoading: subscriptionLoading } = useSubscription();

  if (subscriptionLoading) {
    return (
      <div className="flex justify-center py-20 text-white">
        <Loader2 className="animate-spin h-6 w-6" />
      </div>
    );
  }

  if (!isPaidUser) {
    return <PremiumException />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0b] to-[#15161a]">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-4">
        <Link
          href="/dashboard/newsletter"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-ox-purple transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to newsletters</span>
        </Link>
      </div>

      {/* Main Content Container */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-[#15161a] to-[#1a1a1f] border border-[#1d1d21] rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center gap-2 text-zinc-500 text-sm mb-3">
            <Calendar className="w-4 h-4 text-ox-purple" />
            <time dateTime={newsletter.date.toISOString()}>
              {new Date(newsletter.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            {newsletter.title}
          </h1>

          {newsletter.excerpt && (
            <p className="text-zinc-400 text-lg leading-relaxed border-l-4 border-ox-purple pl-4">
              {newsletter.excerpt}
            </p>
          )}
        </div>

        {/* Content Card */}
        <div className="bg-[#15161a]/50 backdrop-blur-sm border border-[#1d1d21] rounded-2xl p-8 md:p-12 shadow-xl">
          <MarkdownViewer content={newsletter.content} />
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#1d1d21]">
          <p className="text-center text-zinc-500 text-sm">
            © {new Date().getFullYear()} OpenSox. All rights reserved.
          </p>
        </div>
      </article>
    </div>
  );
}
