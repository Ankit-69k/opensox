import NewsLetterContainer from "@/components/dashboard/NewsLetterContainer";
import { getAllNewsletters } from "@/utils/getMarkdownNewsletter";

import React from "react";

async function NewsletterPage() {
  const newsletters = await getAllNewsletters();
  return (
    <div className=" ">
      <NewsLetterContainer newsletters={newsletters} />
    </div>
  );
}

export default NewsletterPage;
