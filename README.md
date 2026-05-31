# kiyomi-portfolio

A single-page [Hugo](https://gohugo.io) portfolio theme with an animated hero,
experience timeline, clickable skills, presentations, education/certifications,
awards, and a floating contact button. Content is driven entirely by simple
YAML data files and site params, so you can build a polished personal site
without touching any templates.

- License: MIT
- Hugo: extended, `>= 0.128.0`

![screenshot](https://raw.githubusercontent.com/mathscantor/hugo-theme-kiyomi-portfolio/main/images/screenshot.png)

## Features

- Single-page layout with smooth-scroll navigation and a mobile menu
- Scroll-reveal animations and staggered transitions
- Hero with profile photo, tagline, location, and quick contact links
- Experience timeline with optional projects and media mentions
- Clickable skill pills with per-skill explanations + language proficiency bars
- Presentations grid supporting images or videos
- Education and certifications columns
- Awards & recognition cards
- Floating contact button (email / LinkedIn) and downloadable resume link
- Every section auto-hides when its data is absent

## Requirements

- Hugo **extended** edition, version **0.128.0** or newer.

## Installation

### Option A: Git submodule

From the root of your Hugo site:

```bash
git submodule add https://github.com/mathscantor/hugo-theme-kiyomi-portfolio.git themes/kiyomi-portfolio
```

Then set the theme in your `hugo.toml`:

```toml
theme = 'kiyomi-portfolio'
```

### Option B: Hugo Modules

Initialize modules (once) and import the theme:

```bash
hugo mod init github.com/you/your-site
```

```toml
# hugo.toml
[module]
  [[module.imports]]
    path = "github.com/mathscantor/hugo-theme-kiyomi-portfolio"
```

```bash
hugo mod get -u
```

## Quick start

1. Install the theme (above) and set `theme = 'kiyomi-portfolio'`.
2. Copy the starter data into your site (only fills in files you don't have):

   ```bash
   bash themes/kiyomi-portfolio/scripts/init-data.sh
   ```

   Or do it manually with a no-clobber copy:

   ```bash
   cp -rn themes/kiyomi-portfolio/exampleSite/data/. data/
   cp -n  themes/kiyomi-portfolio/exampleSite/content/_index.md content/_index.md
   ```

3. Edit `hugo.toml` `[params]`, the files in `data/`, and `content/_index.md`.
4. Add your images under `static/` (see [Assets](#assets)).
5. Run the dev server:

   ```bash
   hugo server
   ```

You can also preview the bundled demo directly from the theme:

```bash
cd themes/kiyomi-portfolio/exampleSite
hugo server --themesDir ../..
```

## Configuration (site params)

Set these under `[params]` in your `hugo.toml`:

| Param            | Purpose                                   | Example                                        |
| ---------------- | ----------------------------------------- | ---------------------------------------------- |
| `firstName`      | First name (hero, nav, footer)            | `"Jane"`                                       |
| `lastName`       | Last name (nav, footer, resume filename)  | `"Doe"`                                         |
| `tagline`        | Short role/tagline under the hero name    | `"Software Engineer"`                          |
| `email`          | Contact email (hero, contact, FAB)        | `"jane.doe@example.com"`                       |
| `linkedin`       | LinkedIn profile URL                      | `"https://www.linkedin.com/in/example/"`       |
| `location`       | Location label in the hero                | `"Remote"`                                     |
| `profileImage`   | Hero profile photo path                   | `"/images/profile.png"`                        |
| `heroBackground` | Hero background image path                | `"/images/hero-bg.png"`                        |
| `favicon`        | Favicon path (SVG)                        | `"/favicon.svg"`                               |
| `ogImage`        | Open Graph / Twitter share image          | `"/opengraph.jpg"`                             |
| `resumeFile`     | Downloadable resume path                  | `"/resume.pdf"`                                |
| `description`    | Meta description + social card text       | `"Jane Doe — Software Engineer"`               |

The site `title` (top-level in `hugo.toml`) is used for the `<title>` tag and
social cards.

## About section content

The **About** section renders the body of `content/_index.md`. Add a `title`
in front matter and write your intro as Markdown:

```markdown
---
title: "Jane Doe — Software Engineer"
---

Hi, I'm Jane. Replace this with a short introduction about yourself.
```

## Data reference

All data files live in your site's `data/` directory. Each maps to a section;
if a file is missing or empty, that section is hidden.

### `data/experience.yaml`

A list of roles, newest first. `context`, `projects`, and `media_mentions` are
optional.

```yaml
- company: "Example Corp"
  title: "Senior Software Engineer"
  period: "Jan 2022 - Present"
  context: "Optional one-line description of the company or team."
  bullets:
    - "A key responsibility or achievement."
    - "Another concise bullet point."
  projects:                       # optional
    - title: "Sample Project"
      desc: "What this project does."
      tags: ["Go", "Distributed Systems"]
  media_mentions:                 # optional
    - publication: "Example News"
      article_title: "How Example Corp shipped X"
      excerpt: "A short quote or summary."
      url: "https://example.com/article"
```

### `data/presentations.yaml`

A list of talks. `media_type` is `"image"` or `"video"`; `media_src` points to
a file under `static/`. `description` and `link` are optional.

```yaml
- title: "An Example Conference Talk"
  event: "Sample Conference 2025"
  date: "Oct 2025"
  description: "A short summary of the talk."
  tags: ["Topic A", "Topic B"]
  media_type: "image"             # or "video"
  media_src: "/images/talk.png"
  link: "https://example.com/slides"   # optional
```

### `data/skills.yaml`

Skills grouped by category. Each skill exposes an `explanation` shown when the
pill is clicked.

```yaml
- category: "Technical"
  items:
    - name: "Go"
      explanation: "Used to build backend services and CLI tools."
    - name: "Python"
      explanation: "Used for scripting and automation."
```

### `data/languages.yaml`

Spoken languages with a `level` label and a `percent` (0-100) for the bar.

```yaml
- name: "English"
  level: "Native"
  percent: 100
```

### `data/education.yaml`

Education history, newest first.

```yaml
- degree: "BSc in Computer Science"
  school: "Example University"
  year: "2019"
```

### `data/certifications.yaml`

Certifications grouped by year, newest first.

```yaml
- year: "2025"
  items:
    - "Example Professional Certification"
```

### `data/awards.yaml`

Awards & recognition cards. Each links to `link`. Remove or empty the file to
hide the Awards section.

```yaml
- title: "Example Award of Excellence"
  source: "Sample Organization"
  link: "https://example.com"
```

## Assets

The theme references several files via params and presentation `media_src`.
Place them under your site's `static/` directory:

| Asset            | Default path (under `static/`)     |
| ---------------- | ---------------------------------- |
| Profile photo    | `images/profile.png`               |
| Hero background  | `images/hero-bg.png`               |
| Favicon          | `favicon.svg`                      |
| Open Graph image | `opengraph.jpg`                    |
| Resume           | `resume.pdf`                       |
| Presentation art | `images/<your-file>.png` / `.mp4`  |

These are intentionally not shipped with the theme; supply your own.

## Customization

Colors, fonts, radius, and spacing are defined as CSS custom properties at the
top of `assets/css/main.css` (`:root { --primary: ...; --font-display: ...; }`).
Override them in your own CSS, or fork the theme's stylesheet. Animations live
in `assets/css/animations.css`.

## How placeholder data works

Hugo never writes into your source tree during a build, so the theme cannot
"auto-create" files in your `data/` directory. The theme also intentionally
does **not** ship a top-level `data/` directory, so your project's `data/`
files are always authoritative: whatever you put in `data/` is exactly what
renders, and an empty or missing file simply hides that section (each section
is guarded in `layouts/index.html`).

To get started quickly, use the editable starter files instead:

- **Copy-if-missing starter (recommended).** `exampleSite/` contains a complete
  working site. The `scripts/init-data.sh` helper (or the `cp -rn` one-liner
  above) copies those data files and `content/_index.md` into your site **only
  when they don't already exist**, so you get editable copies without ever
  clobbering your own work. Re-running it is safe.

Because there are no theme-level data defaults, you never see Hugo's
"overridden by higher precedence data" warnings, and you stay in full control
of every section.

## License

MIT. See the [LICENSE](LICENSE) file for the full text.
