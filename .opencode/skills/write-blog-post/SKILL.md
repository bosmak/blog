---
name: write-blog-post
description: Write a blog post for the Hugo blog at /workspaces/blog. Use when the user wants to write, draft, or plan a blog post. Trigger on keywords like "blog post", "write post", "draft post", "new post". Ask questions to fill gaps — never assume details.
---

# Blog Post Writing Skill

## Overview

This skill writes blog posts for a Hugo blog located at `/workspaces/blog`. Posts are Markdown files under `content/posts/`.

There are two modes of operation:

1. **Empty context** — The user provides rough points, findings, or ideas. You act as a writing assistant: ask clarifying questions, challenge gaps, and help organize raw material into a structured post.
2. **Existing context** — The conversation already contains work that was done (e.g., a debugging session, a project build, a configuration change). You draft an initial blog post based on that context, then iterate with the user.

## Writing Style

**Voice and tone:**

- Write in first person. You're documenting your own experience.
- Be conversational but technically precise. Explain the "why", not just the "how".
- Be honest about failures, dead ends, and things that didn't work. These are often the most valuable parts.
- Add personality — mild humor, personal opinions, reactions. Avoid being dry or robotic.
- Don't assume the reader already knows things, but don't dumb things down either. Link to references or add footnotes for background.
- When something is surprising or frustrating, say so.

**Structure:**

- Open with motivation/context: why are you doing this? What problem are you solving?
- Show the journey: start with objectives, walk through the process, share what you found.
- Use clear section headers (## and ###).
- Use numbered steps when walking through a process.
- Include real commands, real outputs, real prices, real measurements wherever possible.
- For comparisons or benchmarks, use tables.
- Use footnotes [^1] for references, links, and tangential details. Don't let them interrupt the flow.
- Close with a "Closing remarks" or similar section that honestly summarizes findings and notes what's still unresolved.
- If this is part of a series, mention what's coming next.

**Code blocks:**

- Show actual commands and their output. Don't sanitise excessively — real output is more useful.
- Use diff format when showing changes to existing files.
- Annotate non-obvious parts of code/config in comments.
- Prefer complete, runnable examples over snippets.

**Never:**

- Assume details the user hasn't provided. If you're unsure about a model number, a price, a command, a timeline, or a motivation — ASK.
- Gloss over failures or problems. If something didn't work, document it.
- Write marketing copy or overly enthusiastic language. No "excited to announce" or "game-changer".
- Use emoji in the post body.
- Fabricate commands, outputs, or technical details.
- Use `<em>`, `---` or other type of horizontal lines, it makes the post just less organized and ugly.

## Post Front Matter

Use this Hugo front matter template:

```yaml
---
title: "Descriptive Title Here"
date: YYYY-MM-DDTHH:MM:SSZZZ
description: "A one-sentence summary of what the post covers."
image: images/some-header-image.png
imageAltAttribute: "Description of the header image for accessibility."
tags:
  - relevant-tag
  - another-tag
draft: true
---
```

- `date`: Use the current date in ISO 8601 format with timezone.
- `description`: A concise summary. This appears in previews and SEO.
- `image` / `imageAltAttribute`: Optional. If the post has a header image, reference it here. Place images under `/workspaces/blog/static/images/`.
- `tags`: Lowercase, hyphenated. Use existing tags when applicable, add new ones as needed.
- `draft: true`: Always start as draft. The user will change to `false` when ready to publish.

## File Location

Posts go in: `/workspaces/blog/content/posts/`

Filename format: `short-kebab-case-description.md`

Examples of good filenames:
- `vmware-clipboard.md`
- `homelab-netboot.md`
- `nix-ocaml.md`
- `yubikey-redundant-piv.md`

## Workflow — Empty Context

When the user invokes this skill with no prior context (or the context is just "I want to write a blog post"):

1. **Ask what the post is about.** Get the topic, the problem/motivation, and what the user wants to share.
2. **Gather facts.** Ask about:
   - What was the starting problem or motivation?
   - What did they try? What worked? What didn't?
   - Any specific commands, configs, outputs, prices, hardware models?
   - Were there any surprises, dead ends, or frustrations?
   - Is this part of a series?
   - What tags would be appropriate?
   - Any images/screenshots they want to include?
3. **Propose an outline.** Based on the gathered information, suggest a section structure. Get the user's input and adjust.
4. **Draft sections.** Write the post section by section, sharing each section for review as you go.
5. **Iterate.** Incorporate feedback. Ask follow-up questions when something is unclear or thin.
6. **Finalize.** Add front matter, clean up, save the file.

**Key rule: Ask, don't assume.** If you don't know a model number, a price, a command, or why something was done a certain way, ask. Never fabricate technical details.

## Workflow — Existing Context

When the conversation already contains substantial technical work (debugging, configuration, troubleshooting, building something):

1. **Summarize what was done.** Briefly recap the technical work from the conversation to confirm understanding.
2. **Propose an outline.** Structure the work into a narrative blog post. Share the outline.
3. **Identify gaps.** Flag anything important that's missing from the context — specifics about hardware, commands that were run but not shown, motivations, or outcomes. Ask the user to fill these gaps.
4. **Draft the post.** Write the full draft based on the context and any additional information provided.
5. **Iterate.** Incorporate feedback.
6. **Finalize.** Add front matter, clean up, save the file.

Even in this mode, **ask about details that aren't in the context**. The conversation might show *what* was done but not *why* it was done, or what alternatives were considered and rejected.

## Questions to Always Ask

Regardless of mode, always clarify these if they're not provided:

- **Motivation**: Why did you do this? What problem were you solving?
- **Scope**: Is this a standalone post or part of a series?
- **Audience assumption**: Who is the reader? (Self-documenting? Fellow tinkerer? Expert in the field?)
- **Gaps**: Anything you tried that failed? Anything you're unsure about?
- **Images**: Screenshots, photos, diagrams to include?
- **Series context**: If part of a series, link to previous/next posts?

## Example Post Structure

Here's a representative structure (adapt to the content):

```markdown
---
title: "Descriptive Title"
date: 2024-03-25T10:00:00+01:00
description: "One-sentence description."
tags:
  - tag1
  - tag2
draft: true
---

Opening paragraph: what's the post about and why should the reader care.

## Background / Motivation

Why did you start this? What problem needed solving? Link to previous posts if this is a series.

## The Setup / Prerequisites

What's needed? Hardware, software, configs. Be specific with versions and models.

## What You Did

Step-by-step walkthrough. Include commands, configs, outputs. Show the actual journey including mistakes.

## Problems Encountered

Dead ends, bugs, surprises. This is often the most useful section.

## Results / Measurements

If applicable, include concrete data: performance numbers, cost breakdowns, before/after comparisons.

## Closing Remarks

Honest summary. What worked well, what didn't, what's still unresolved, what's next.

[^1]: Footnotes for references and tangential details.
```