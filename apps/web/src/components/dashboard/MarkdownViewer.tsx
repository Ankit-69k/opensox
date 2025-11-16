"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownViewerProps {
  content: string;
}

export function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <div className="prose prose-invert prose-zinc max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mb-4 text-white" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl font-semibold mb-3 mt-8 text-white"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-xl font-semibold mb-2 mt-6 text-white"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 text-zinc-300 leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-inside mb-4 text-zinc-300 space-y-2"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside mb-4 text-zinc-300 space-y-2"
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li className="text-zinc-300" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-ox-purple hover:text-ox-purple/80 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-ox-purple pl-4 py-2 my-4 italic text-zinc-400 bg-[#15161a]"
              {...props}
            />
          ),
          code: ({ node, inline, ...props }: any) =>
            inline ? (
              <code
                className="bg-[#15161a] text-ox-purple px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              />
            ) : (
              <code
                className="block bg-[#15161a] text-zinc-300 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm"
                {...props}
              />
            ),
          pre: ({ node, ...props }) => (
            <pre
              className="bg-[#15161a] rounded-lg overflow-x-auto my-4"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img className="rounded-lg my-4 max-w-full h-auto" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table
                className="min-w-full border border-[#1d1d21]"
                {...props}
              />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th
              className="border border-[#1d1d21] bg-[#15161a] px-4 py-2 text-left text-white font-semibold"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="border border-[#1d1d21] px-4 py-2 text-zinc-300"
              {...props}
            />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-[#1d1d21]" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
