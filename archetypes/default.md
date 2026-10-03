---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
description: ""
draft: true
# Uncomment for Mermaid diagrams in this post (renders ```mermaid fenced
# code blocks and the {{< mermaid >}} shortcode). Without this the diagrams
# stay as text — the render hook still wraps them in <pre class="mermaid">,
# but the head only loads the library when the post opts in.
# mermaid: true
# Optional social-share preview (sets og:image / twitter:image). nuno does
# not render cover images in the page body — the design is cover-free on
# purpose. Place the file under assets/images/, not static/, so nuno's image
# pipeline can process it at build time.
# cover:
#   image: images/some-header-image.png
#   alt: "Description for screen readers and previews."
tags: []
---
