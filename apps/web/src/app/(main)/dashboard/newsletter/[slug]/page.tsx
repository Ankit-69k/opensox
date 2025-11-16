import { NewsletterView } from "@/components/dashboard/NewsletterView";
import { getNewsletter } from "@/utils/getMarkdownNewsletter";

export default async function NewsletterViewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsletter = getNewsletter(slug);

  if (!newsletter) return <div className="text-white p-10">Not Found</div>;

  return <NewsletterView newsletter={newsletter} />;
}
