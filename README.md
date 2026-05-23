# blog.bsmk.xyz

Personal blog powered by [Hugo](https://gohugo.io/) with the [drishtikon](https://github.com/kishenarayan/drishtikon) theme.

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

3. Start the dev server:

   ```sh
   hugo server -D
   ```

   The site will be available at [http://localhost:1313](http://localhost:1313).

## Writing a new post

```sh
hugo new posts/my-post-slug.md
```

Then edit `content/posts/my-post-slug.md` and add front matter.

## Deploy

Pushes to `main` automatically build and deploy to GitHub Pages via the [deploy workflow](.github/workflows/deploy.yml).
