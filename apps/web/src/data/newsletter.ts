import { NewsletterProps } from "@/types/newsletter";

export const newsletters: NewsletterProps[] = [
  {
    id: "1",
    title: "Welcome to Our Newsletter",
    date: new Date("2025-01-15"),
    slug: "welcome-to-our-newsletter",
    excerpt:
      "Introducing our new monthly newsletter with updates, insights, and resources.",
    content: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: {
            textAlign: null,
            level: 1,
          },
          content: [
            {
              type: "text",
              text: "Getting started",
            },
          ],
        },
        {
          type: "paragraph",
          attrs: {
            textAlign: null,
          },
          content: [
            {
              type: "text",
              text: "Welcome to the ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "italic",
                },
                {
                  type: "highlight",
                  attrs: {
                    color: "var(--tt-color-highlight-yellow)",
                  },
                },
              ],
              text: "Simple Editor",
            },
            {
              type: "text",
              text: " template! This template integrates ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "bold",
                },
              ],
              text: "open source",
            },
            {
              type: "text",
              text: " UI components and Tiptap extensions licensed under ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "bold",
                },
              ],
              text: "MIT",
            },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          type: "paragraph",
          attrs: {
            textAlign: null,
          },
          content: [
            {
              type: "text",
              text: "Integrate it by following the ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: "https://tiptap.dev/docs/ui-components/templates/simple-editor",
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    class: null,
                  },
                },
              ],
              text: "Tiptap UI Components docs",
            },
            {
              type: "text",
              text: " or using our CLI tool.",
            },
          ],
        },
        {
          type: "codeBlock",
          attrs: {
            language: null,
          },
          content: [
            {
              type: "text",
              text: "npx @tiptap/cli init",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            textAlign: null,
            level: 2,
          },
          content: [
            {
              type: "text",
              text: "Features",
            },
          ],
        },
        {
          type: "blockquote",
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: null,
              },
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "italic",
                    },
                  ],
                  text: "A fully responsive rich text editor with built-in support for common formatting and layout tools. Type markdown ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "**",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "italic",
                    },
                  ],
                  text: " or use keyboard shortcuts ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "⌘+B",
                },
                {
                  type: "text",
                  text: " for ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "strike",
                    },
                  ],
                  text: "most",
                },
                {
                  type: "text",
                  text: " all common markdown marks. 🪄",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          attrs: {
            textAlign: "left",
          },
          content: [
            {
              type: "text",
              text: "Add images, customize alignment, and apply ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "highlight",
                  attrs: {
                    color: "var(--tt-color-highlight-blue)",
                  },
                },
              ],
              text: "advanced formatting",
            },
            {
              type: "text",
              text: " to make your writing more engaging and professional.",
            },
          ],
        },
        {
          type: "image",
          attrs: {
            src: "/images/tiptap-ui-placeholder-image.jpg",
            alt: "placeholder-image",
            title: "placeholder-image",
          },
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      text: "Superscript",
                    },
                    {
                      type: "text",
                      text: " (x",
                    },
                    {
                      type: "text",
                      marks: [
                        {
                          type: "superscript",
                        },
                      ],
                      text: "2",
                    },
                    {
                      type: "text",
                      text: ") and ",
                    },
                    {
                      type: "text",
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      text: "Subscript",
                    },
                    {
                      type: "text",
                      text: " (H",
                    },
                    {
                      type: "text",
                      marks: [
                        {
                          type: "subscript",
                        },
                      ],
                      text: "2",
                    },
                    {
                      type: "text",
                      text: "O) for precision.",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      text: "Typographic conversion",
                    },
                    {
                      type: "text",
                      text: ": automatically convert to ",
                    },
                    {
                      type: "text",
                      marks: [
                        {
                          type: "code",
                        },
                      ],
                      text: "->",
                    },
                    {
                      type: "text",
                      text: " an arrow ",
                    },
                    {
                      type: "text",
                      marks: [
                        {
                          type: "bold",
                        },
                      ],
                      text: "→",
                    },
                    {
                      type: "text",
                      text: ".",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          attrs: {
            textAlign: "left",
          },
          content: [
            {
              type: "text",
              marks: [
                {
                  type: "italic",
                },
              ],
              text: "→ ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: "https://tiptap.dev/docs/ui-components/templates/simple-editor#features",
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    class: null,
                  },
                },
              ],
              text: "Learn more",
            },
          ],
        },
        {
          type: "horizontalRule",
        },
        {
          type: "heading",
          attrs: {
            textAlign: "left",
            level: 2,
          },
          content: [
            {
              type: "text",
              text: "Make it your own",
            },
          ],
        },
        {
          type: "paragraph",
          attrs: {
            textAlign: "left",
          },
          content: [
            {
              type: "text",
              text: "Switch between light and dark modes, and tailor the editor's appearance with customizable CSS to match your style.",
            },
          ],
        },
        {
          type: "taskList",
          content: [
            {
              type: "taskItem",
              attrs: {
                checked: true,
              },
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "Test template",
                    },
                  ],
                },
              ],
            },
            {
              type: "taskItem",
              attrs: {
                checked: false,
              },
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      marks: [
                        {
                          type: "link",
                          attrs: {
                            href: "https://tiptap.dev/docs/ui-components/templates/simple-editor",
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            class: null,
                          },
                        },
                      ],
                      text: "Integrate the free template",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          attrs: {
            textAlign: "left",
          },
        },
      ],
    },
  },
  {
    id: "2",
    title: "December 2024 Updates",
    date: new Date("2024-12-20"),
    slug: "december-2024-updates",
    excerpt:
      "Year-end reflections and exciting developments from the past month.",
    content: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { textAlign: null, level: 1 },
          content: [
            { type: "text", text: "AI Productivity Update — February 2025" },
          ],
        },
        {
          type: "paragraph",
          attrs: { textAlign: null },
          content: [
            {
              type: "text",
              text: "Welcome to this month's edition of the newsletter! 🚀 AI innovation continues to reshape how we create, build, and work. Here's a quick breakdown of what's new, what's useful — and what you should be paying attention to.",
            },
          ],
        },
        {
          type: "horizontalRule",
        },
        {
          type: "heading",
          attrs: { textAlign: null, level: 2 },
          content: [{ type: "text", text: "What's New in AI" }],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "This month, multiple open-source and commercial AI models were released, with a strong focus on ",
            },
            {
              type: "text",
              marks: [{ type: "bold" }],
              text: "coding assistance",
            },
            { type: "text", text: ", " },
            {
              type: "text",
              marks: [{ type: "italic" }],
              text: "workflow automation",
            },
            { type: "text", text: ", and " },
            {
              type: "text",
              marks: [{ type: "bold" }, { type: "italic" }],
              text: "multimodal reasoning",
            },
            { type: "text", text: "." },
          ],
        },
        {
          type: "blockquote",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "“AI won’t replace humans — but humans who use AI will replace humans who do not.”",
                },
              ],
            },
          ],
        },
        {
          type: "image",
          attrs: {
            src: "/images/newsletter-ai-trends.png",
            alt: "AI Trend Chart",
            title: "AI Growth Chart",
          },
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    { type: "text", marks: [{ type: "bold" }], text: "Agents" },
                    {
                      type: "text",
                      text: ": autonomous task execution is becoming mainstream",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [{ type: "bold" }],
                      text: "Long-context models",
                    },
                    {
                      type: "text",
                      text: ": memory and reasoning are improving fast",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "heading",
          attrs: { textAlign: null, level: 2 },
          content: [{ type: "text", text: "Tools Worth Trying" }],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Here are some tools making waves — many with free tiers:",
            },
          ],
        },
        {
          type: "taskList",
          content: [
            {
              type: "taskItem",
              attrs: { checked: true },
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Cursor AI (coding)" }],
                },
              ],
            },
            {
              type: "taskItem",
              attrs: { checked: false },
              content: [
                {
                  type: "paragraph",
                  content: [
                    {
                      type: "text",
                      marks: [
                        {
                          type: "link",
                          attrs: {
                            href: "https://claude.ai/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                      ],
                      text: "Claude 3.7 (writing + reasoning)",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "heading",
          attrs: { textAlign: null, level: 2 },
          content: [{ type: "text", text: "Pro Tip" }],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "You can automate repetitive tasks using prompt variables. Example:",
            },
          ],
        },
        {
          type: "codeBlock",
          attrs: { language: "json" },
          content: [
            {
              type: "text",
              text: '{\n  "goal": "Summarize articles weekly",\n  "tone": "friendly",\n  "output": "3-bullet points"\n}',
            },
          ],
        },
        {
          type: "horizontalRule",
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              marks: [{ type: "italic" }],
              text: "Want more like this? Reply and tell us what topics interest you.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "3",
    title: "November 2024 Roundup",
    date: new Date("2024-11-25"),
    slug: "november-2024-roundup",
    excerpt: "A comprehensive look at everything that happened this November.",
    content: `
      <h1>November 2024 Roundup</h1>
      <p>November was packed with activity! Here's everything you need to know about what happened this month.</p>

      <h2>Major Milestones</h2>
      <p>We reached several <strong>important milestones</strong> this month that we're proud to celebrate with you.</p>

      <p>From product improvements to community growth, November has been a month of progress and achievement.</p>

      <h2>Community Spotlight</h2>
      <p>We want to take a moment to thank our <strong>amazing community</strong> for your continued support and engagement.</p>

      <p>Your feedback and participation make everything we do possible. Thank you for being part of this journey!</p>
    `,
  },
];
