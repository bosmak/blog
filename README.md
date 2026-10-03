# blog.bsmk.xyz

Personal blog powered by [Hugo](https://gohugo.io/) with the [nuno](https://github.com/that-daniel/nuno) theme (pinned to v0.3.0).

## Local development

1. Install [mise](https://mise.jdx.dev/) — it will pick up the Hugo version from `mise.toml`:

   ```sh
   mise install
   ```

2. Clone with submodules:

   ```sh
   git clone --recurse-submodules https://github.com/bosmak/blog.git
   ```

   If you already cloned without `--recurse-submodules`:

   ```sh
   git submodule update --init --recursive
   ```

   To upgrade to a newer nuno release:

   ```sh
   git -C themes/nuno checkout vX.Y.Z
   git add themes/nuno
   git commit
   ```

3. Start the dev server:

   ```sh
   hugo server -D
   ```

   The site will be available at [http://localhost:1313](http://localhost:1313).

## Layout

- `content/posts/` — Markdown posts. The single post ships with two Mermaid flowcharts; Mermaid is wired in via a site override of `partials/head.html`, so any post with `mermaid: true` in its front matter renders `<pre class="mermaid">` and `mermaid` fenced blocks.
- `assets/` — images and CSS that nuno's image/CSS pipeline ingests. The profile photo (`profile.jpg`) and favicon live here so nuno can process them.
- `layouts/partials/head.html` — site override that inlines nuno's CSS together with `assets/css/custom.css` and boots Mermaid. It tracks nuno's upstream `head.html`; when bumping nuno, port any new lines from the theme.
- `layouts/partials/mermaid.html`, `layouts/shortcodes/mermaid.html`, `layouts/_default/_markup/render-codeblock-mermaid.html` — Mermaid support that nuno doesn't ship.

## Writing a new post

```sh
hugo new posts/my-post-slug.md
```

Then edit `content/posts/my-post-slug.md` and add front matter. Useful keys:

- `mermaid: true` — render any ```` ```mermaid ```` code blocks and `{{< mermaid >}}` shortcode blocks in this post.
- `cover: { image: "images/foo.png", alt: "..." }` — sets the social-share preview image. nuno does not display cover images in the page body; the design is cover-free on purpose.

## Deploy

Pushes to `main` automatically build and deploy to GitHub Pages via the [deploy workflow](.github/workflows/deploy.yml).
