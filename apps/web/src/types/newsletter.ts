import { JSONContent } from "@tiptap/react";

export type NewsletterProps = {
  id: string;
  title: string;
  date: Date;
  slug: string;
  excerpt: string;
  content: string;
};
