# Image and asset placeholders

The theme references a handful of static assets through site params in
`hugo.toml`. Drop your own files into your site's `static/` directory so the
paths resolve. With the default `exampleSite` config they are:

| Param            | Expected path (under `static/`)        | Notes                                  |
| ---------------- | -------------------------------------- | -------------------------------------- |
| `profileImage`   | `images/profile.png`                   | Square headshot shown in the hero.     |
| `heroBackground` | `images/hero-bg.png`                   | Full-width hero background image.      |
| `favicon`        | `favicon.svg`                          | Browser tab icon (SVG).                |
| `ogImage`        | `opengraph.jpg`                        | Social share preview image.            |
| `resumeFile`     | `resume.pdf`                           | Downloadable resume linked in Contact. |

Presentations also reference images via each entry's `media_src`
(for example `images/presentation-placeholder.png`).

These files are intentionally not shipped with the theme. Replace the paths in
your `hugo.toml` and data files, or add matching files here.
