# Agent Notes

Guidance for AI coding assistants (and contributors using one) working in this repo. This is a Jekyll site with no JS framework and no Bootstrap — everything is plain Liquid templates, hand-rolled CSS, and Markdown content.

## Orientation

- `_layouts/sketchbook.html` is the layout almost every page uses. It switches structure based on front matter (`scrollspy: true`, `home: true`, etc.) — read it before adding a new front-matter switch.
- `_includes/typography/` — content-level building blocks for sketch bodies (pullquote, callout, blockquote, sketch-prompt, sketch-info, section-accent).
- `_includes/nav/` — navigation, cards, listing/TOC components.
- `_includes/images/` and `_includes/layout/` — figures, page headers, feature rows.
- `assets/css/` is split by concern: `vars.css` (custom properties only), `base.css` (grid/reset), `typography.css`, `nav.css`, `cards.css`, `components.css`, `layout.css`, plus `page-header.css`/`search.css` loaded conditionally.
- `assets/js/nav.js` and `assets/js/search.js` are small hand-written vanilla JS — no bundler, no framework.
- Content lives in `research/`, which has a `_sketch-template.md` — the leading underscore excludes it from the Jekyll build, so it's safe to duplicate and never gets published itself.

## Bootstrap-shaped classes are not Bootstrap

Markup throughout uses Bootstrap-style class names — `navbar`, `navbar-toggler`, `container-fluid`, `row`, `col-sm-4`, `g-0`, `d-flex` — but **Bootstrap's CSS and JS are not loaded anywhere** (no gem, no CDN link, no vendored file). Every rule behind those names is custom CSS in `assets/css/`. Don't assume a class has Bootstrap's real behavior. Before relying on one, confirm the matching rule actually exists in this repo. A markup/JS class-name mismatch here has caused real bugs (e.g. a hamburger toggle whose JS selectors didn't match the HTML it was supposed to control).

## Writing sketch content

- Follow [STYLE-GUIDE.md](STYLE-GUIDE.md) for editorial standards, examples, evidence, and status labels. Preserve the distinction between classroom experience and suggested adaptations.

- Sketch bodies should be **plain Markdown plus the existing typography includes** — not raw HTML, not inline `style="..."` attributes. If you need a visual element a current include doesn't support, extend the include (and its CSS rule) rather than hand-coding it inline in a content file.
- Front matter fields are standardized per section. Don't invent new keys — copy the relevant `_sketch-template.md` (`research/`) and use its field set as-is. If a field doesn't already render somewhere (check `_includes/typography/sketch-info.html` and `_includes/nav/card-list.html`), adding it silently does nothing.

## CSS

- Add rules to whichever existing stylesheet already owns that concern — don't create a new stylesheet or reach for inline `style=`.
- Reuse the custom properties in `vars.css` (colors, spacing, shadows, fonts) instead of hardcoding values. If a value isn't there yet and you'll reuse it, add it as a variable rather than repeating a literal.
- Font sizes come from the type scale in `vars.css` (`--text-label` through `--text-2xl`). Don't add a new literal size; pick the nearest step. Only headings and display type use their own `clamp()` values.

## Includes should document themselves

Most includes open with a `{% comment %}...{% endcomment %}` block stating their parameters and a usage example — see `_includes/typography/pullquote.html` or `_includes/nav/card-grid.html` for the pattern. Follow it:

- New include → add the header comment.
- Changing an existing include's parameters → update its header in the same edit, not as a follow-up.

This keeps "what does this include do" answerable by opening the file, instead of relying on a separate reference doc that goes stale.

## Avoiding drift

This codebase has accumulated dead/duplicate code from copy-paste-and-modify edits — e.g. an entire unused second scrollspy implementation once sat alongside the real one. Before adding new CSS or JS behavior:

- Grep for an existing implementation first (`grep -rn` across `assets/` and `_includes/`).
- If you rename a class or id in markup, grep `assets/js/` and `assets/css/` for the old name before considering the change done.
- If you find code with no remaining callers, delete it rather than leaving it next to its replacement.

## Building locally

`bundle exec jekyll build`. If Sass fails with an `Invalid US-ASCII character` error, it's a shell locale issue, not a content bug — run with `LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8` set.
