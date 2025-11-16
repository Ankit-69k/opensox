import NewsLetterContainer from "@/components/dashboard/NewsLetterContainer";
import { getAllNewsletters } from "@/utils/getMarkdownNewsletter";

import React from "react";

function NewsletterPage() {
  const newsletters = getAllNewsletters();
  return (
    <div className=" ">
      <NewsLetterContainer newsletters={newsletters} />
    </div>
  );
}

export default NewsletterPage;
