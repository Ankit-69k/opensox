import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NewsletterProps } from "@/types/newsletter";

const newsletterPath = path.join(process.cwd(), "src/constant/newsletters");

export function getAllNewsletters(): NewsletterProps[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(newsletterPath)) {
      console.error("Newsletter directory not found:", newsletterPath);
      return [];
    }

    // Get all .md files
    const files = fs
      .readdirSync(newsletterPath)
      .filter((file) => file.endsWith(".md"));

    const newsletters = files.map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(newsletterPath, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse frontmatter and content
      const { data, content } = matter(fileContents);

      return {
        id: slug,
        slug,
        title: data.title || slug,
        date:
          data.date && !isNaN(new Date(data.date).getTime())
            ? new Date(data.date)
            : new Date(),
        excerpt: data.excerpt || content.slice(0, 150) + "...",
        content,
      } as NewsletterProps;
    });

    // Sort by date (newest first)
    return newsletters.sort((a, b) => b.date.getTime() - a.date.getTime());
  } catch (error) {
    console.error("Error reading newsletters:", error);
    return [];
  }
}

export function getNewsletter(slug: string): NewsletterProps | null {
  try {
    const fullPath = path.join(newsletterPath, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: slug,
      slug,
      title: data.title || slug,
      date:
        data.date && !isNaN(new Date(data.date).getTime())
          ? new Date(data.date)
          : new Date(),
      excerpt:
        data.excerpt ||
        (content.length > 150 ? content.slice(0, 150) + "..." : content.trim()),

      content,
    } as NewsletterProps;
  } catch (error) {
    console.error(`Error reading newsletter ${slug}:`, error);
    return null;
  }
}
