# AI Workbench

Research experiments with AI at the University of New Mexico: working with sources, bibliographies, maps, models, and drafts, with concrete results, checks, and limitations.

Intended site URL: https://amaranth.unm.edu/ai-workbench/.

## Edit and preview

Copy `research/_sketch-template.md` to a new Markdown file in `research/`. Keep its existing field set, use the site's includes, and follow [STYLE-GUIDE.md](STYLE-GUIDE.md). Images and PDFs stay in `research/images/` and `research/pdfs/`.

Run `bundle install` if needed, then:

```sh
bundle exec jekyll serve --port 4004
```

Open http://localhost:4004/ai-workbench/. Build with `LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 bundle exec jekyll build`.

This is a standalone Jekyll site. It has its own configuration, assets, includes, layouts, search index, tags, navigation, and contribution guide. It does not depend on the AI Sketchbook source folder.

## Publish

This folder lives beside `ai-sketchbook` as `ai-workbench`. Create the `amaranth-unm/ai-workbench` repository, push these files, and configure GitHub Pages in the same way as AI Sketchbook. Confirm the production URL works before publishing the teaching site's research redirects.

For classroom activities and assignments, visit [AI Sketchbook](https://amaranth.unm.edu/ai-sketchbook/).
