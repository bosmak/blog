# Agent notes for this blog

Short context for the next AI session, so the project doesn't have to be re-derived from scratch.

## Stack

- **Hugo 0.161.1** (pinned in `mise.toml`). Anything below 0.158 will fail with the nuno theme.
- **Theme: [nuno](https://github.com/that-daniel/nuno) v0.3.0** as a submodule at `themes/nuno`. nuno is on 0.x — track a tag, not the default branch.
- **Deploy**: GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

## Local dev

```sh
mise install                      # picks up Hugo from mise.toml
git submodule update --init       # if themes/nuno is empty
hugo server -D                    # http://localhost:1313
```

## Layouts — what's custom and why

Only one file in `layouts/` is a site override; everything else is left for nuno to provide:

- `layouts/partials/head.html` — site override. Concats `nuno.css` with `assets/css/custom.css` into one inlined stylesheet, and appends the Mermaid boot conditional on `.Param "mermaid"`. **This file tracks nuno's upstream `head.html` line-for-line.** When bumping the pin (`git -C themes/nuno checkout vX.Y.Z`), diff against the theme and port any new lines by hand. The header comment in the file says the same.

Everything else under `layouts/` is Mermaid wiring (nuno doesn't ship Mermaid):

- `layouts/partials/mermaid.html` — CDN + init, reads nuno's CSS tokens for theme colours
- `layouts/shortcodes/mermaid.html` — `{{< mermaid >}}` shortcode wrapper
- `layouts/_default/_markup/render-codeblock-mermaid.html` — render hook for ```` ```mermaid ```` fenced blocks; produces `<pre class="mermaid">`

## Front matter shape

nuno's contract, not the drishtikon one this repo used to have:

- `cover: { image, alt }` — social-share preview only. nuno does not render cover images in the page body on purpose; the design is cover-free. Place images under `assets/images/`, not `static/`.
- `mermaid: true` — opt-in for Mermaid on the post. The render hook always wraps `mermaid` code blocks in `<pre class="mermaid">`, but the head only loads the library when this flag is set. Without it, the diagrams show as raw text. The skill spells this out too.

## Image pipeline

nuno reads from `assets/`, not `static/`. `static/` is fine for files you want served verbatim (rare). The profile photo and favicon live under `assets/` so nuno can resize/convert them at build time.

## Writing a post

```sh
hugo new posts/my-post-slug.md
```

The archetype (`archetypes/default.md`) ships the nuno-shaped template with `mermaid` and `cover` commented as opt-ins. For tone, structure, and style guidance, read `.pi/skills/write-blog-post/SKILL.md` first — it owns the writing conventions, this file owns the technical ones.

## Common gotchas

- **Mermaid not rendering** — `mermaid: true` missing from the post front matter. The render hook wrapped the code; the library just never loaded.
- **Cover image not showing on social shares** — the image file is in `static/` instead of `assets/`, so nuno's pipeline never sees it.
- **`nuno: og:image not found` warning at build** — same as above, or the path in `cover.image` is wrong.
- **Theme update broke something subtle** — likely the `head.html` override is out of sync. Diff `themes/nuno/layouts/partials/head.html` against `layouts/partials/head.html` and port.
